import { UpdateForwardRuleRequestBody } from './UpdateForwardRuleRequestBody';


export class UpdateForwardRuleRequest {
    private 'instance_id'?: string;
    private 'rule_id'?: string;
    public ip?: string;
    public body?: UpdateForwardRuleRequestBody;
    public constructor(instanceId?: string, ruleId?: string, ip?: string) { 
        this['instance_id'] = instanceId;
        this['rule_id'] = ruleId;
        this['ip'] = ip;
    }
    public withInstanceId(instanceId: string): UpdateForwardRuleRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withRuleId(ruleId: string): UpdateForwardRuleRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withIp(ip: string): UpdateForwardRuleRequest {
        this['ip'] = ip;
        return this;
    }
    public withBody(body: UpdateForwardRuleRequestBody): UpdateForwardRuleRequest {
        this['body'] = body;
        return this;
    }
}