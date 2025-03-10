import AbstractUser, { UserInterface } from "./AbstractUser";

export default class User extends AbstractUser {
    constructor(UserInterface: UserInterface) {
        super(UserInterface);
    }
    isNull() {
        return false;
    }
}