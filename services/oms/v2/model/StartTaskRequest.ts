import { StartTaskReq } from './StartTaskReq';


export class StartTaskRequest {
    private 'task_id'?: string;
    public body?: StartTaskReq;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): StartTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withBody(body: StartTaskReq): StartTaskRequest {
        this['body'] = body;
        return this;
    }
}