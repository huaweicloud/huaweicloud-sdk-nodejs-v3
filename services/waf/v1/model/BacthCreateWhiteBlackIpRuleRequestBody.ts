

export class BacthCreateWhiteBlackIpRuleRequestBody {
    public name?: string;
    public addr?: string;
    public description?: string;
    public white?: number;
    private 'ip_group_id'?: string;
    private 'time_mode'?: string;
    public start?: number;
    public terminal?: number;
    private 'policy_ids'?: Array<string>;
    public constructor(name?: string, white?: number, policyIds?: Array<string>) { 
        this['name'] = name;
        this['white'] = white;
        this['policy_ids'] = policyIds;
    }
    public withName(name: string): BacthCreateWhiteBlackIpRuleRequestBody {
        this['name'] = name;
        return this;
    }
    public withAddr(addr: string): BacthCreateWhiteBlackIpRuleRequestBody {
        this['addr'] = addr;
        return this;
    }
    public withDescription(description: string): BacthCreateWhiteBlackIpRuleRequestBody {
        this['description'] = description;
        return this;
    }
    public withWhite(white: number): BacthCreateWhiteBlackIpRuleRequestBody {
        this['white'] = white;
        return this;
    }
    public withIpGroupId(ipGroupId: string): BacthCreateWhiteBlackIpRuleRequestBody {
        this['ip_group_id'] = ipGroupId;
        return this;
    }
    public set ipGroupId(ipGroupId: string  | undefined) {
        this['ip_group_id'] = ipGroupId;
    }
    public get ipGroupId(): string | undefined {
        return this['ip_group_id'];
    }
    public withTimeMode(timeMode: string): BacthCreateWhiteBlackIpRuleRequestBody {
        this['time_mode'] = timeMode;
        return this;
    }
    public set timeMode(timeMode: string  | undefined) {
        this['time_mode'] = timeMode;
    }
    public get timeMode(): string | undefined {
        return this['time_mode'];
    }
    public withStart(start: number): BacthCreateWhiteBlackIpRuleRequestBody {
        this['start'] = start;
        return this;
    }
    public withTerminal(terminal: number): BacthCreateWhiteBlackIpRuleRequestBody {
        this['terminal'] = terminal;
        return this;
    }
    public withPolicyIds(policyIds: Array<string>): BacthCreateWhiteBlackIpRuleRequestBody {
        this['policy_ids'] = policyIds;
        return this;
    }
    public set policyIds(policyIds: Array<string>  | undefined) {
        this['policy_ids'] = policyIds;
    }
    public get policyIds(): Array<string> | undefined {
        return this['policy_ids'];
    }
}