import { BatchSetSqlSwitchNewRequestBody } from './BatchSetSqlSwitchNewRequestBody';


export class BatchSetSqlSwitchNewRequest {
    public body?: BatchSetSqlSwitchNewRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchSetSqlSwitchNewRequestBody): BatchSetSqlSwitchNewRequest {
        this['body'] = body;
        return this;
    }
}