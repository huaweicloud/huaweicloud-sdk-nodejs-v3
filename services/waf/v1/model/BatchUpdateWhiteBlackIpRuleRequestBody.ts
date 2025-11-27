import { PolicyRuleIdRequestBodyPolicyRuleIds } from './PolicyRuleIdRequestBodyPolicyRuleIds';


export class BatchUpdateWhiteBlackIpRuleRequestBody {
    public name?: string;
    public addr?: string;
    public description?: string;
    public white?: number;
    private 'ip_group_id'?: string;
    private 'time_mode'?: string;
    public start?: number;
    public terminal?: number;
    private 'policy_rule_ids'?: Array<PolicyRuleIdRequestBodyPolicyRuleIds>;
    public constructor(name?: string, white?: number) { 
        this['name'] = name;
        this['white'] = white;
    }
    public withName(name: string): BatchUpdateWhiteBlackIpRuleRequestBody {
        this['name'] = name;
        return this;
    }
    public withAddr(addr: string): BatchUpdateWhiteBlackIpRuleRequestBody {
        this['addr'] = addr;
        return this;
    }
    public withDescription(description: string): BatchUpdateWhiteBlackIpRuleRequestBody {
        this['description'] = description;
        return this;
    }
    public withWhite(white: number): BatchUpdateWhiteBlackIpRuleRequestBody {
        this['white'] = white;
        return this;
    }
    public withIpGroupId(ipGroupId: string): BatchUpdateWhiteBlackIpRuleRequestBody {
        this['ip_group_id'] = ipGroupId;
        return this;
    }
    public set ipGroupId(ipGroupId: string  | undefined) {
        this['ip_group_id'] = ipGroupId;
    }
    public get ipGroupId(): string | undefined {
        return this['ip_group_id'];
    }
    public withTimeMode(timeMode: string): BatchUpdateWhiteBlackIpRuleRequestBody {
        this['time_mode'] = timeMode;
        return this;
    }
    public set timeMode(timeMode: string  | undefined) {
        this['time_mode'] = timeMode;
    }
    public get timeMode(): string | undefined {
        return this['time_mode'];
    }
    public withStart(start: number): BatchUpdateWhiteBlackIpRuleRequestBody {
        this['start'] = start;
        return this;
    }
    public withTerminal(terminal: number): BatchUpdateWhiteBlackIpRuleRequestBody {
        this['terminal'] = terminal;
        return this;
    }
    public withPolicyRuleIds(policyRuleIds: Array<PolicyRuleIdRequestBodyPolicyRuleIds>): BatchUpdateWhiteBlackIpRuleRequestBody {
        this['policy_rule_ids'] = policyRuleIds;
        return this;
    }
    public set policyRuleIds(policyRuleIds: Array<PolicyRuleIdRequestBodyPolicyRuleIds>  | undefined) {
        this['policy_rule_ids'] = policyRuleIds;
    }
    public get policyRuleIds(): Array<PolicyRuleIdRequestBodyPolicyRuleIds> | undefined {
        return this['policy_rule_ids'];
    }
}