import { MigrationUpdateRequestEntity } from './MigrationUpdateRequestEntity';


export class UpdateMigrationTaskRequest {
    private 'task_id'?: string;
    public body?: MigrationUpdateRequestEntity;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): UpdateMigrationTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withBody(body: MigrationUpdateRequestEntity): UpdateMigrationTaskRequest {
        this['body'] = body;
        return this;
    }
}