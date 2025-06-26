import { ControlOperateReqBody } from './ControlOperateReqBody';


export class EnableControlRequest {
    public body?: ControlOperateReqBody;
    public constructor() { 
    }
    public withBody(body: ControlOperateReqBody): EnableControlRequest {
        this['body'] = body;
        return this;
    }
}