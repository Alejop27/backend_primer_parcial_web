
export default abstract class User {

protected first_name: string;
protected last_name: string;
protected email: string;
protected password: string;
protected phone: number;
protected address: string;
protected role: string;


constructor(userInterface: UserInterface) {
    this.first_name = userInterface.first_name;
    this.last_name = userInterface.last_name;
    this.email = userInterface.email;
    this.password = userInterface.password;
    this.phone = userInterface.phone;
    this.address = userInterface.address;
    this.role = userInterface.role;  
}

public abstract isNull(): boolean



public getFirstName(): string {
    return this.first_name;
}

public setFirstName(first_name: string): void {
    if(first_name === null || first_name === undefined) {
        throw new Error("First name is required")
    }
    this.first_name = first_name;
}

public getLastName(): string {
    return this.last_name;   
}

public setLastName(last_name: string): void {
    if(last_name === null || last_name === undefined) {
        throw new Error("Last name is required")
    }
    this.last_name = last_name;
}

public getEmail(): string {
    return this.email;
}

public setEmail(email: string): void {
    if(email === null || email === undefined) {
        throw new Error("Email is required")
    }
    this.email = email;
}

public getPassword(): string {
    return this.password;
}

public setPassword(password: string): void {
    if(password === null || password === undefined) {
        throw new Error("Password is required")
    }
    this.password = password;
}

public getPhone(): number {
    return this.phone;
}

public setPhone(phone: number): void {
    if(phone === null || phone === undefined) {
        throw new Error("Phone is required")
    }
    this.phone = phone;
}

public getAddress(): string {
    return this.address;
}

public setAddress(address: string): void {
    if(address === null || address === undefined) {
        throw new Error("Address is required")
    }
    this.address = address;
}

public getRole(): string {
    return this.role;
}

public setRole(role: string): void {
    if(role === null || role === undefined) {
        throw new Error("Role is required")
    }
    this.role = role;
}
}

interface UserInterface {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    phone: number;
    address: string;
    role: string;
}

export { UserInterface }