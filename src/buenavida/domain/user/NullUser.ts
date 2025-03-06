import AbstractUser from "./AbstractUser";

export default class NullUser extends AbstractUser {
    constructor() {
        super({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            phone: 0,
            address: "",
            role: ""
        });
    }
    public isNull = (): boolean => true;

    public override setFirstName = (_first_name: string): void => {
        return 
    }

    public override setLastName = (_last_name: string): void => {
        return 
    }

    public override setEmail = (_email: string): void => {
        return 
    }   

    public override setPassword = (_password: string): void => {
        return 
    }

    public override setPhone = (_phone: number): void => {
        return 
    }

    public override setAddress = (_address: string): void => {
        return 
    }

    public override setRole = (_role: string): void => {
        return 
    }



}