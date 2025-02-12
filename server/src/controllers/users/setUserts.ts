import { UserModel } from "../../model/users/UserModel";
import jwt from "jwt-simple";
import bcrypt from "bcrypt";
const saltRounds = Number(process.env.SALT_BCRYPT) || 10;

export const secret = process.env.SECRET_JWT || "secret";

export async function addUser(req: any, res: any) {
  try {
    const { fullName, password, email } = req.body;

    //send request to DB
    const result = await UserModel.create({
      fullName,
      password,
      email,
    });
    console.log(result);
    if (!result) {
      return res.status(400).send({ error: "Couldn't create new user" });
    }

    return res.status(201).send({ message: "User created successfully" });
  } catch (error: any) {
    console.error(error);
    return res.status(500).send({ error: error.message });
  }
}

export async function register(req: any, res: any) {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      throw new Error("Please fill all fields");
    }

    //hash password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    //send request to DB
    await UserModel.create({
      fullName,
      email,
      password: hashedPassword,
    });

    return res.status(201).send({ message: "User registered successfully" });
  } catch (error: any) {
    console.error(error);
    return res.status(500).send({ error: error.message });
  }
}

export async function login(req: any, res: any) {
  try {
    const { email, password } = req.body;

    if (!email || !password) throw new Error("Please fill all fields");

    // Find user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).send({ error: "Invalid email or password" });
    }

    if (!user.password) throw new Error("Invalid email or password");

    //compare password

    const match = await bcrypt.compare(password, user.password);
    console.log("is match", match);
    if (!match) {
      return res.status(400).send({ error: "Invalid email or password" });
    }

    //encode user id and role in token
    const token = jwt.encode({ id: user._id, role: "user" }, secret);

    //send cookie to client
    res.cookie("user", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    return res.status(200).send({ message: "Login successful" });
  } catch (error: any) {
    if ((error.code = "11000")) {
      res.status(400).send({ error: "user already exists" });
    }
    console.error(error);
    return res.status(500).send({ error: error.message });
  }
}
