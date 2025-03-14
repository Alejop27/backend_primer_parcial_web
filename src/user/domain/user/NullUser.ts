import AbstractUser, { UserInterface } from "./AbstractUser";
import { TypeUser } from "./TypeUSer";

export default class NullUser extends AbstractUser {
    constructor() {
        super({
            id: 0,
            names: "Null User",
            surnames: "",
            email: "",
            password: "",
            address: "",
            phone: 0,
            role: TypeUser.ADMIN,
            createdAt: new Date(),
        });
    }
    public isNull = (): boolean => true;

    public override setId(_id: number): void {
        return
    }

    public override setNames(_names: string): void {
        return
    }

    public override setSurnames(_surnames: string): void {
        return
    }

    public override setEmail(_email: string): void {
        return
    }

    public override setPassword(_password: string): void {
        return
    }

    public override setAddress(_address: string): void {
        return
    }

    public override setPhone(_phone: number): void {
        return
    }

    public override setRole(_role: TypeUser): void {
        return
    }

    public override setCreatedAt(_createdAt: Date): void {
        return
    }

}   