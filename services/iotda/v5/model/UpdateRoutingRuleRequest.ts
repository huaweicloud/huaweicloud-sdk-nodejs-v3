import { UpdateRuleReq } from './UpdateRuleReq';


export class UpdateRoutingRuleRequest {
    private 'Instance-Id'?: string;
    private 'rule_id'?: string;
    public body?: UpdateRuleReq;
    public constructor(ruleId?: string) { 
        this['rule_id'] = ruleId;
    }
    public withInstanceId(instanceId: string): UpdateRoutingRuleRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withRuleId(ruleId: string): UpdateRoutingRuleRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withBody(body: UpdateRuleReq): UpdateRoutingRuleRequest {
        this['body'] = body;
        return this;
    }
}