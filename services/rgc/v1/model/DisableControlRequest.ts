import { ControlOperateReqBody } from './ControlOperateReqBody';


export class DisableControlRequest {
    public body?: ControlOperateReqBody;
    public constructor() { 
    }
    public withBody(body: ControlOperateReqBody): DisableControlRequest {
        this['body'] = body;
        return this;
    }
}