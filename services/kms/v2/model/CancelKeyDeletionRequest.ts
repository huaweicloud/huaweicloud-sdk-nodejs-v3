import { OperateKeyRequestBody } from './OperateKeyRequestBody';


export class CancelKeyDeletionRequest {
    public body?: OperateKeyRequestBody;
    public constructor() { 
    }
    public withBody(body: OperateKeyRequestBody): CancelKeyDeletionRequest {
        this['body'] = body;
        return this;
    }
}