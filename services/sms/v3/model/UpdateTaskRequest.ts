import { PutTaskReq } from './PutTaskReq';


export class UpdateTaskRequest {
    private 'task_id'?: string;
    public body?: PutTaskReq;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): UpdateTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withBody(body: PutTaskReq): UpdateTaskRequest {
        this['body'] = body;
        return this;
    }
}