import { BatchSwitchesRequest } from './BatchSwitchesRequest';


export class SwitchRiskRuleRequest {
    private 'instance_id'?: string;
    public body?: BatchSwitchesRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SwitchRiskRuleRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: BatchSwitchesRequest): SwitchRiskRuleRequest {
        this['body'] = body;
        return this;
    }
}