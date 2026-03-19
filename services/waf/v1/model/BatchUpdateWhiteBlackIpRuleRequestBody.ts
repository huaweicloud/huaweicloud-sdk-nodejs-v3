import { BatchUpdateWhiteBlackIpRuleRequestBodyPolicyRuleIds } from './BatchUpdateWhiteBlackIpRuleRequestBodyPolicyRuleIds';


export class BatchUpdateWhiteBlackIpRuleRequestBody {
    public name?: string;
    public addr?: string;
    public description?: string;
    public white?: number;
    private 'ip_group_id'?: string;
    private 'time_mode'?: BatchUpdateWhiteBlackIpRuleRequestBodyTimeModeEnum | string;
    public start?: number;
    public terminal?: number;
    private 'policy_rule_ids'?: Array<BatchUpdateWhiteBlackIpRuleRequestBodyPolicyRuleIds>;
    public constructor(name?: string, white?: number, policyRuleIds?: Array<BatchUpdateWhiteBlackIpRuleRequestBodyPolicyRuleIds>) { 
        this['name'] = name;
        this['white'] = white;
        this['policy_rule_ids'] = policyRuleIds;
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
    public withTimeMode(timeMode: BatchUpdateWhiteBlackIpRuleRequestBodyTimeModeEnum | string): BatchUpdateWhiteBlackIpRuleRequestBody {
        this['time_mode'] = timeMode;
        return this;
    }
    public set timeMode(timeMode: BatchUpdateWhiteBlackIpRuleRequestBodyTimeModeEnum | string  | undefined) {
        this['time_mode'] = timeMode;
    }
    public get timeMode(): BatchUpdateWhiteBlackIpRuleRequestBodyTimeModeEnum | string | undefined {
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
    public withPolicyRuleIds(policyRuleIds: Array<BatchUpdateWhiteBlackIpRuleRequestBodyPolicyRuleIds>): BatchUpdateWhiteBlackIpRuleRequestBody {
        this['policy_rule_ids'] = policyRuleIds;
        return this;
    }
    public set policyRuleIds(policyRuleIds: Array<BatchUpdateWhiteBlackIpRuleRequestBodyPolicyRuleIds>  | undefined) {
        this['policy_rule_ids'] = policyRuleIds;
    }
    public get policyRuleIds(): Array<BatchUpdateWhiteBlackIpRuleRequestBodyPolicyRuleIds> | undefined {
        return this['policy_rule_ids'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchUpdateWhiteBlackIpRuleRequestBodyTimeModeEnum {
    PERMANENT = 'permanent',
    CUSTOMIZE = 'customize'
}
