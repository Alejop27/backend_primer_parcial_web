import UserRepositoryPort from "../../domain/port/driven/UserRepositoryPort";
import NullUser from "../../domain/user/NullUser";
import User from "../../domain/user/User";

export default class UserRepository implements UserRepositoryPort {
    
    constructor(
        
    ) {}

    public findAll = async (): Promise<User[]> => {

        return [];
    }

    findById = async (_id: number): Promise<User> =>
        promise.resolve(new NullUser())

    save: (item: User) => Promise<User>;
    update: (id: number, item: User) => Promise<boolean | User>;
    patch: (id: number, item: Partial<User>) => Promise<boolean | User>;
    delete: (id: number) => Promise<boolean>;

}