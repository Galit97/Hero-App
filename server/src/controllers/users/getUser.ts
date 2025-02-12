import { UserModel } from "../../model/users/UserModel";

export async function getUserById(req: any, res: any) {
    try {
        const { id } = req.params;
        const user = await UserModel.findById(id).select("-password");

        if (!user) {
            return res.status(404).send({ error: "User not found" });
        }

        return res.status(200).send(user);
    } catch (error: any) {
        return res.status(500).send({ error: error.message });
    }
}

export async function getAllUsers(req: any, res: any) {
    try {
        const users = await UserModel.find().select("-password");

        return res.status(200).send(users);
    } catch (error: any) {
        return res.status(500).send({ error: error.message });
    }
}
