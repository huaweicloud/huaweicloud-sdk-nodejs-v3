import { OperateKeyRequestBody } from './OperateKeyRequestBody';


export class ShowKeyRotationStatusRequest {
    public body?: OperateKeyRequestBody;
    public constructor() { 
    }
    public withBody(body: OperateKeyRequestBody): ShowKeyRotationStatusRequest {
        this['body'] = body;
        return this;
    }
}