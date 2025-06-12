import { SmartConnectTaskEntity } from './SmartConnectTaskEntity';


export class ModifyConnectorTaskRequest {
    private 'instance_id'?: string;
    private 'task_id'?: string;
    public body?: SmartConnectTaskEntity;
    public constructor(instanceId?: string, taskId?: string) { 
        this['instance_id'] = instanceId;
        this['task_id'] = taskId;
    }
    public withInstanceId(instanceId: string): ModifyConnectorTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTaskId(taskId: string): ModifyConnectorTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withBody(body: SmartConnectTaskEntity): ModifyConnectorTaskRequest {
        this['body'] = body;
        return this;
    }
}