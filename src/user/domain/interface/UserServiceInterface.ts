import User from "../user/User";

export default interface UserServiceInterface{
    regisUser(user: User): Promise<boolean>;

    updateUser(
        id: number,
        names: string,
        surnames: string,
        email: string,
        password: string,
        address: string,
        phone: number,
        role: string,
        createdAt: Date
    ): Promise<boolean>;

    deleteUser(id: number): Promise<boolean>;

    



}

