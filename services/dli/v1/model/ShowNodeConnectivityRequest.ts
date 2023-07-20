

export class ShowNodeConnectivityRequest {
    private 'queue_name'?: string;
    private 'task_id'?: string;
    public constructor(queueName?: string, taskId?: string) { 
        this['queue_name'] = queueName;
        this['task_id'] = taskId;
    }
    public withQueueName(queueName: string): ShowNodeConnectivityRequest {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withTaskId(taskId: string): ShowNodeConnectivityRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
}