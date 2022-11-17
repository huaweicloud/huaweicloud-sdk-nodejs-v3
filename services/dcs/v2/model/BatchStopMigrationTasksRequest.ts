import { BatchStopMigrationTasksBody } from './BatchStopMigrationTasksBody';


export class BatchStopMigrationTasksRequest {
    public body?: BatchStopMigrationTasksBody;
    public constructor() { 
    }
    public withBody(body: BatchStopMigrationTasksBody): BatchStopMigrationTasksRequest {
        this['body'] = body;
        return this;
    }
}