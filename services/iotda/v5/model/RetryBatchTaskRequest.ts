import { BatchTargets } from './BatchTargets';


export class RetryBatchTaskRequest {
    private 'Instance-Id'?: string | undefined;
    private 'task_id': string | undefined;
    public body?: BatchTargets;
    public constructor(taskId?: any) { 
        this['task_id'] = taskId;
    }
    public withInstanceId(instanceId: string): RetryBatchTaskRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withTaskId(taskId: string): RetryBatchTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
    public withBody(body: BatchTargets): RetryBatchTaskRequest {
        this['body'] = body;
        return this;
    }
}