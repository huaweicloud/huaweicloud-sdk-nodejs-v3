import { KillProcessesOpenRequest } from './KillProcessesOpenRequest';


export class ExecuteKillPhysicalProcessesRequest {
    private 'instance_id'?: string;
    public body?: KillProcessesOpenRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ExecuteKillPhysicalProcessesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: KillProcessesOpenRequest): ExecuteKillPhysicalProcessesRequest {
        this['body'] = body;
        return this;
    }
}