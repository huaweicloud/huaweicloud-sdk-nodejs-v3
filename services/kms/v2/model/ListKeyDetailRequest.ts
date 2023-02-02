import { OperateKeyRequestBody } from './OperateKeyRequestBody';


export class ListKeyDetailRequest {
    public body?: OperateKeyRequestBody;
    public constructor() { 
    }
    public withBody(body: OperateKeyRequestBody): ListKeyDetailRequest {
        this['body'] = body;
        return this;
    }
}