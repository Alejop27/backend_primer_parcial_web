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
        Promise.resolve(new NullUser())

    public save = async (_item: User): Promise<User> =>
        Promise.resolve(new NullUser())
    
    public update = async (_id: number, _item: User): Promise<boolean | User> =>
        Promise.resolve(false)

    public patch = (
        _id: number, 
        _item: Partial<User>
    ): Promise<boolean | User> => Promise.resolve(false)

    public delete = (_id: number): Promise<boolean> => Promise.resolve(false) 

}