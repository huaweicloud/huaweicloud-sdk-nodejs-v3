import { BatchTargets } from './BatchTargets';


export class StopBatchTaskRequest {
    private 'Instance-Id'?: string;
    private 'task_id'?: string;
    public body?: BatchTargets;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withInstanceId(instanceId: string): StopBatchTaskRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withTaskId(taskId: string): StopBatchTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withBody(body: BatchTargets): StopBatchTaskRequest {
        this['body'] = body;
        return this;
    }
}