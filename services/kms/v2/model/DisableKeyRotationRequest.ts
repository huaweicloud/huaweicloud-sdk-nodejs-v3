import { OperateKeyRequestBody } from './OperateKeyRequestBody';


export class DisableKeyRotationRequest {
    public body?: OperateKeyRequestBody;
    public constructor() { 
    }
    public withBody(body: OperateKeyRequestBody): DisableKeyRotationRequest {
        this['body'] = body;
        return this;
    }
}