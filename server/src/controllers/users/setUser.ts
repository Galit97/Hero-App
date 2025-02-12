import { UserModel } from "../../model/users/UserModel";
import jwt from "jwt-simple";
import bcrypt from "bcrypt";


const saltRounds = Number(process.env.SALT_BCRYPT) || 10;
const secret = process.env.SECRET_JWT || "secret";



export async function register(req: any, res: any) {
    try {
        console.log("Incoming request:", req.body);  // Log incoming data

        const { fullName, email, password } = req.body;

        if (!fullName || !email || !password) {
            console.error("Validation Error: Missing Fields");
            return res.status(400).send({ error: "All fields are required" });
        }

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            console.error("User already exists:", email);
            return res.status(400).send({ error: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);
        await UserModel.create({ fullName, email, password: hashedPassword });

        console.log("User registered successfully");
        return res.status(201).send({ message: "User registered successfully" });

    } catch (error: any) {
        console.error("Error in register:", error);
        return res.status(500).send({ error: error.message || "Internal Server Error" });
    }
}


export async function login(req: any, res: any) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send({ error: "All fields are required" });
        }

        const user = await UserModel.findOne({ email });
        if (!user || !user.password) {
            return res.status(400).send({ error: "Invalid email or password" });
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).send({ error: "Invalid email or password" });
        }

        const token = jwt.encode({ id: user._id, role: "user" }, secret);

        res.cookie("user", token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 });

        return res.status(200).send({ message: "Login successful", token });
    } catch (error: any) {
        return res.status(500).send({ error: error.message });
    }
}
