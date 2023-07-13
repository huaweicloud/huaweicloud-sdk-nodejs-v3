import { BatchRebootServersRequestBody } from './BatchRebootServersRequestBody';


export class BatchRebootServersRequest {
    public body?: BatchRebootServersRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchRebootServersRequestBody): BatchRebootServersRequest {
        this['body'] = body;
        return this;
    }
}