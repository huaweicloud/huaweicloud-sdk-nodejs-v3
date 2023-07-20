import { SetOnlineMigrationTaskBody } from './SetOnlineMigrationTaskBody';


export class SetOnlineMigrationTaskRequest {
    private 'task_id'?: string;
    public body?: SetOnlineMigrationTaskBody;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): SetOnlineMigrationTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withBody(body: SetOnlineMigrationTaskBody): SetOnlineMigrationTaskRequest {
        this['body'] = body;
        return this;
    }
}