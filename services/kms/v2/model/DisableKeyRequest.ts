import { OperateKeyRequestBody } from './OperateKeyRequestBody';


export class DisableKeyRequest {
    public body?: OperateKeyRequestBody;
    public constructor() { 
    }
    public withBody(body: OperateKeyRequestBody): DisableKeyRequest {
        this['body'] = body;
        return this;
    }
}