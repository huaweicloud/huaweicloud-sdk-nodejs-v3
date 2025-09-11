import { AgentSwitchRequest } from './AgentSwitchRequest';


export class SwitchAgentNewRequest {
    private 'instance_id'?: string;
    public body?: AgentSwitchRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SwitchAgentNewRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: AgentSwitchRequest): SwitchAgentNewRequest {
        this['body'] = body;
        return this;
    }
}