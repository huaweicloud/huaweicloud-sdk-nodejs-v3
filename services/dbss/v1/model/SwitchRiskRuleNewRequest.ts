import { BatchSwitchesRequest } from './BatchSwitchesRequest';


export class SwitchRiskRuleNewRequest {
    private 'instance_id'?: string;
    public body?: BatchSwitchesRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SwitchRiskRuleNewRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: BatchSwitchesRequest): SwitchRiskRuleNewRequest {
        this['body'] = body;
        return this;
    }
}