import { TypeUser } from "./TypeUSer"

export default abstract class AbstractUser {
    protected id: number
    protected names: string
    protected surnames: string
    protected email: string
    protected password: string
    protected address: string
    protected phone: number
    protected role: TypeUser
    protected createdAt: Date

    constructor(UserInterface: UserInterface){
        this.id = UserInterface.id
        this.names = UserInterface.names
        this.surnames = UserInterface.surnames
        this.email = UserInterface.email
        this.password = UserInterface.password
        this.address = UserInterface.address
        this.phone = UserInterface.phone
        this.role = UserInterface.role
        this.createdAt = UserInterface.createdAt
    }

    public validateUser = (email: string): AbstractUser | void => {
        if (this.email === email) {
            return this;
        }
    };

    public abstract isNull (): boolean 

    toString(): string {
        return `User: ${this.names} ${this.surnames} (ID: ${this.id})\n` +
            `Email: ${this.email}\n` +
            `Phone: ${this.phone}\n` +
            `Address: ${this.address}\n` +
            `Role: ${this.role}\n` +
            `Created At: ${this.createdAt.toISOString()}`;
    }
    
    public getId(): number {
        return this.id
    }

    public getNames(): string {
        return this.names
    }

    public getSurnames(): string {
        return this.surnames
    }

    public getEmail(): string {
        return this.email
    }

    public getPassword(): string {
        return this.password
    }

    public getAddress(): string {
        return this.address
    }

    public getPhone(): number {
        return this.phone
    }

    public getRole(): TypeUser {
        return this.role
    }

    public getCreatedAt(): Date {
        return this.createdAt
    }

    public setId(id: number): void {
        this.id = id
    }

    public setNames(names: string): void {
        this.names = names
    }

    public setSurnames(surnames: string): void {
        this.surnames = surnames
    }

    public setEmail(email: string): void {
        this.email = email
    }

    public setPassword(password: string): void {
        this.password = password
    }

    public setAddress(address: string): void {
        this.address = address
    }

    public setPhone(phone: number): void {
        this.phone = phone
    }

    public setRole(role: TypeUser): void {
        this.role = role
    }

    public setCreatedAt(createdAt: Date): void {
        this.createdAt = createdAt
    }
    
}
    interface UserInterface{
        id: number
        names: string
        surnames: string
        email: string
        password: string
        address: string
        phone: number
        role: TypeUser
        createdAt: Date
    }

    export { UserInterface }
