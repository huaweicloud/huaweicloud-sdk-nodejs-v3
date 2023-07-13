import { OperateKeyRequestBody } from './OperateKeyRequestBody';


export class ShowPublicKeyRequest {
    public body?: OperateKeyRequestBody;
    public constructor() { 
    }
    public withBody(body: OperateKeyRequestBody): ShowPublicKeyRequest {
        this['body'] = body;
        return this;
    }
}