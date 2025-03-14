import RouterExpressInterface from '../../../express/domain/RouterExpressInterface';
import { Router } from 'express'

export interface UserRouterExpressInterface extends RouterExpressInterface{
    getRouter(): Router;
}