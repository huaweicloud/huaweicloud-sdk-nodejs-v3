import { AgentSwitchRequest } from './AgentSwitchRequest';


export class SwitchAgentRequest {
    private 'instance_id'?: string;
    public body?: AgentSwitchRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SwitchAgentRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: AgentSwitchRequest): SwitchAgentRequest {
        this['body'] = body;
        return this;
    }
}