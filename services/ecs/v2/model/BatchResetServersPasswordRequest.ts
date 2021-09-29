import { BatchResetServersPasswordRequestBody } from './BatchResetServersPasswordRequestBody';


export class BatchResetServersPasswordRequest {
    public body?: BatchResetServersPasswordRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchResetServersPasswordRequestBody): BatchResetServersPasswordRequest {
        this['body'] = body;
        return this;
    }
}