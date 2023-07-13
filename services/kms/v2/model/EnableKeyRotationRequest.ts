import { OperateKeyRequestBody } from './OperateKeyRequestBody';


export class EnableKeyRotationRequest {
    public body?: OperateKeyRequestBody;
    public constructor() { 
    }
    public withBody(body: OperateKeyRequestBody): EnableKeyRotationRequest {
        this['body'] = body;
        return this;
    }
}