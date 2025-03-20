import { EnableScheduledTaskRequestBody } from './EnableScheduledTaskRequestBody';


export class EnableScheduledTaskRequest {
    private 'task_id'?: string;
    public body?: EnableScheduledTaskRequestBody;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): EnableScheduledTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withBody(body: EnableScheduledTaskRequestBody): EnableScheduledTaskRequest {
        this['body'] = body;
        return this;
    }
}