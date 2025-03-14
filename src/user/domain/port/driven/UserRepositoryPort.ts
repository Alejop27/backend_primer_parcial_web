import RepositoryInterface from '../../../../repository/domain/RepositoryInterface'
import User from "../../user/User"

export default interface UserRepositoryPort extends RepositoryInterface <number, User> {}