import { Router } from "express"
import ErrorControllerExpressInterface from "../../../domain/ErrorControllerExpress"
import RouterExpressInterface from "../../../domain/RouterExpressInterface"

export default class ErrorRouterExpress implements RouterExpressInterface {
    public router: Router
    public path: string
    

    constructor(
        private readonly errorController: ErrorControllerExpressInterface) {
        this.router = Router()
        this.path = "*"
    
        this.routes()
    }

    public routes = (): void => {
        this.router.all(this.path, this.errorController.error.bind(this.errorController))
    }
}