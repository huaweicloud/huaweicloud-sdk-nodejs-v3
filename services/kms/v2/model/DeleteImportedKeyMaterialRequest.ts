import { OperateKeyRequestBody } from './OperateKeyRequestBody';


export class DeleteImportedKeyMaterialRequest {
    public body?: OperateKeyRequestBody;
    public constructor() { 
    }
    public withBody(body: OperateKeyRequestBody): DeleteImportedKeyMaterialRequest {
        this['body'] = body;
        return this;
    }
}