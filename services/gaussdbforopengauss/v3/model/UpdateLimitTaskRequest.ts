import { UpdateLimitTaskRequestBody } from './UpdateLimitTaskRequestBody';


export class UpdateLimitTaskRequest {
    private 'task_id'?: string;
    private 'instance_id'?: string;
    public body?: UpdateLimitTaskRequestBody;
    public constructor(taskId?: string, instanceId?: string) { 
        this['task_id'] = taskId;
        this['instance_id'] = instanceId;
    }
    public withTaskId(taskId: string): UpdateLimitTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withInstanceId(instanceId: string): UpdateLimitTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateLimitTaskRequestBody): UpdateLimitTaskRequest {
        this['body'] = body;
        return this;
    }
}