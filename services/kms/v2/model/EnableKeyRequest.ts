import { OperateKeyRequestBody } from './OperateKeyRequestBody';


export class EnableKeyRequest {
    public body?: OperateKeyRequestBody;
    public constructor() { 
    }
    public withBody(body: OperateKeyRequestBody): EnableKeyRequest {
        this['body'] = body;
        return this;
    }
}