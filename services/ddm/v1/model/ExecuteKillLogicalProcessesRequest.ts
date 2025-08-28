import { KillProcessesOpenRequest } from './KillProcessesOpenRequest';


export class ExecuteKillLogicalProcessesRequest {
    private 'instance_id'?: string;
    public body?: KillProcessesOpenRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ExecuteKillLogicalProcessesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: KillProcessesOpenRequest): ExecuteKillLogicalProcessesRequest {
        this['body'] = body;
        return this;
    }
}