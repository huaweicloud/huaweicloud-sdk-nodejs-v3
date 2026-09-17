import { BatchSetSqlLimitingSwitchRequestBody } from './BatchSetSqlLimitingSwitchRequestBody';


export class BatchSetSqlLimitingSwitchRequest {
    public body?: BatchSetSqlLimitingSwitchRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchSetSqlLimitingSwitchRequestBody): BatchSetSqlLimitingSwitchRequest {
        this['body'] = body;
        return this;
    }
}