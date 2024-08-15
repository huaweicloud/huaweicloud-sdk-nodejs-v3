import { BatchRestartOnlineMigrationTasksBody } from './BatchRestartOnlineMigrationTasksBody';


export class BatchRestartOnlineMigrationTasksRequest {
    public body?: BatchRestartOnlineMigrationTasksBody;
    public constructor() { 
    }
    public withBody(body: BatchRestartOnlineMigrationTasksBody): BatchRestartOnlineMigrationTasksRequest {
        this['body'] = body;
        return this;
    }
}