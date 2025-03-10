import AbstractUser, { UserInterface } from "./AbstractUser";

export default class NullUser extends AbstractUser {
    constructor(UserInterface: UserInterface) {
        super(UserInterface);
    }
    isNull() {
        return true;
    }
}