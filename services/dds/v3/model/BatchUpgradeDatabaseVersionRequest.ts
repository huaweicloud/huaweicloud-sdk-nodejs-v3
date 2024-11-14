import { BatchUpgradeDatabaseVersionRequestBody } from './BatchUpgradeDatabaseVersionRequestBody';


export class BatchUpgradeDatabaseVersionRequest {
    public body?: BatchUpgradeDatabaseVersionRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchUpgradeDatabaseVersionRequestBody): BatchUpgradeDatabaseVersionRequest {
        this['body'] = body;
        return this;
    }
}