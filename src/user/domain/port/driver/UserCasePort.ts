import { TypeUser } from "../../user/TypeUSer";

export default interface UserCasePort{
    cratedUser(
        id: number,
        names: string,
        surnames: string,
        email: string,
        password: string,
        address: string,
        phone: number,
        role: TypeUser.CUSTOMER,
        createdAt: Date
    ): Promise<boolean>;

    updateUser(
        id: number,
        names: string,
        surnames: string,
        email: string,
        password: string,
        address: string,
        phone: number,
        role: TypeUser.CUSTOMER,
        createdAt: Date
    ): Promise<boolean>;

    deleteUSer(id: number): Promise<boolean>;

    login(email: string, password: string): Promise<string | null>;

    logout(userId: number): Promise<void>;
}