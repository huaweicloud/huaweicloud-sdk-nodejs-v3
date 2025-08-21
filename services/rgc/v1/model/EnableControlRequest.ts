import { EnableControlOperateReqBody } from './EnableControlOperateReqBody';


export class EnableControlRequest {
    public body?: EnableControlOperateReqBody;
    public constructor() { 
    }
    public withBody(body: EnableControlOperateReqBody): EnableControlRequest {
        this['body'] = body;
        return this;
    }
}