import { TransferRuleBody } from './TransferRuleBody';


export class UpdateInstanceIpRuleRequest {
    private 'instance_id'?: string;
    public ip?: string;
    private 'rule_id'?: string;
    public body?: TransferRuleBody;
    public constructor(instanceId?: string, ip?: string, ruleId?: string) { 
        this['instance_id'] = instanceId;
        this['ip'] = ip;
        this['rule_id'] = ruleId;
    }
    public withInstanceId(instanceId: string): UpdateInstanceIpRuleRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withIp(ip: string): UpdateInstanceIpRuleRequest {
        this['ip'] = ip;
        return this;
    }
    public withRuleId(ruleId: string): UpdateInstanceIpRuleRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withBody(body: TransferRuleBody): UpdateInstanceIpRuleRequest {
        this['body'] = body;
        return this;
    }
}