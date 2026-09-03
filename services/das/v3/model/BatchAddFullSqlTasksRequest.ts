import { BatchAddFullSqlTasksRequestBody } from './BatchAddFullSqlTasksRequestBody';


export class BatchAddFullSqlTasksRequest {
    public body?: BatchAddFullSqlTasksRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchAddFullSqlTasksRequestBody): BatchAddFullSqlTasksRequest {
        this['body'] = body;
        return this;
    }
}