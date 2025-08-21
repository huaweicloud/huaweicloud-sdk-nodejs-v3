import { DisableControlOperateReqBody } from './DisableControlOperateReqBody';


export class DisableControlRequest {
    public body?: DisableControlOperateReqBody;
    public constructor() { 
    }
    public withBody(body: DisableControlOperateReqBody): DisableControlRequest {
        this['body'] = body;
        return this;
    }
}