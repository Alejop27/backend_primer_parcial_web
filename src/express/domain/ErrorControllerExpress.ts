import ControllerExpressInterface from "./ControllerExpressInterface";

export default interface ErrorControllerExpress extends ControllerExpressInterface {
    error(req: Request, res: Response): void
}