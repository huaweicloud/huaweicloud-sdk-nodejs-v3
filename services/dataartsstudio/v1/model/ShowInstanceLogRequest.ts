import { JobLogRequest } from './JobLogRequest';


export class ShowInstanceLogRequest {
    public workspace?: string;
    private 'task_id'?: string;
    private 'instance_id'?: string;
    public body?: JobLogRequest;
    public constructor(workspace?: string, taskId?: string, instanceId?: string) { 
        this['workspace'] = workspace;
        this['task_id'] = taskId;
        this['instance_id'] = instanceId;
    }
    public withWorkspace(workspace: string): ShowInstanceLogRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withTaskId(taskId: string): ShowInstanceLogRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withInstanceId(instanceId: string): ShowInstanceLogRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: JobLogRequest): ShowInstanceLogRequest {
        this['body'] = body;
        return this;
    }
}