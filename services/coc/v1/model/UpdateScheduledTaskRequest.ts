import { ScheduledTaskRequestBody } from './ScheduledTaskRequestBody';


export class UpdateScheduledTaskRequest {
    private 'task_id'?: string;
    public body?: ScheduledTaskRequestBody;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): UpdateScheduledTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withBody(body: ScheduledTaskRequestBody): UpdateScheduledTaskRequest {
        this['body'] = body;
        return this;
    }
}