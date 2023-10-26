import { RedisConnectionParam } from './RedisConnectionParam';


export class CheckMigrationConnectivityRequest {
    private 'task_id'?: string;
    public body?: RedisConnectionParam;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): CheckMigrationConnectivityRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withBody(body: RedisConnectionParam): CheckMigrationConnectivityRequest {
        this['body'] = body;
        return this;
    }
}