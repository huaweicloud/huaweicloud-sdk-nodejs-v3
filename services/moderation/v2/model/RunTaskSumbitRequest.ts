import { TaskSumbitReq } from './TaskSumbitReq';


export class RunTaskSumbitRequest {
    public body?: TaskSumbitReq;
    public constructor() { 
    }
    public withBody(body: TaskSumbitReq): RunTaskSumbitRequest {
        this['body'] = body;
        return this;
    }
}