import { RunRequestV2 } from './RunRequestV2';


export class RunTaskRequest {
    private 'task_id'?: string;
    public body?: RunRequestV2;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): RunTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withBody(body: RunRequestV2): RunTaskRequest {
        this['body'] = body;
        return this;
    }
}