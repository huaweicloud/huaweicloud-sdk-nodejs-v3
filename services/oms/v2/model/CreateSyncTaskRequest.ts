import { CreateSyncTaskReq } from './CreateSyncTaskReq';


export class CreateSyncTaskRequest {
    public body?: CreateSyncTaskReq;
    public constructor() { 
    }
    public withBody(body: CreateSyncTaskReq): CreateSyncTaskRequest {
        this['body'] = body;
        return this;
    }
}