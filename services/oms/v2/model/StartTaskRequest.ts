import { StartTaskReq } from './StartTaskReq';


export class StartTaskRequest {
    private 'task_id'?: number;
    public body?: StartTaskReq;
    public constructor(taskId?: number) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: number): StartTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: number  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): number | undefined {
        return this['task_id'];
    }
    public withBody(body: StartTaskReq): StartTaskRequest {
        this['body'] = body;
        return this;
    }
}