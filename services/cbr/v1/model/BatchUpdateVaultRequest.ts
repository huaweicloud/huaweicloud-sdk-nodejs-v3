import { BatchUpdateVaultRequestBody } from './BatchUpdateVaultRequestBody';


export class BatchUpdateVaultRequest {
    public body?: BatchUpdateVaultRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchUpdateVaultRequestBody): BatchUpdateVaultRequest {
        this['body'] = body;
        return this;
    }
}