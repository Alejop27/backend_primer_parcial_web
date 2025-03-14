import RouterExpressInterface from '../../../express/domain/RouterExpressInterface';
import { Request, Response } from 'express'

export interface UserControllerExpressInterface extends RouterExpressInterface {
    login(req: Request, res: Response): Promise<void>
    logout(req: Request, res: Response): Promise<void>
    cratedUser(req: Request, res: Response): Promise<void>
    updateUser(req: Request, res: Response): Promise<void>
    deleteUSer(req: Request, res: Response): Promise<void>

}