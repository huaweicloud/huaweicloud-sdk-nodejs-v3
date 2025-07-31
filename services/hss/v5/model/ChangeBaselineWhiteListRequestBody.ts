

export class ChangeBaselineWhiteListRequestBody {
    public id?: string;
    private 'rule_type'?: string;
    private 'host_id_list'?: Array<string>;
    public description?: string;
    public constructor(id?: string, ruleType?: string) { 
        this['id'] = id;
        this['rule_type'] = ruleType;
    }
    public withId(id: string): ChangeBaselineWhiteListRequestBody {
        this['id'] = id;
        return this;
    }
    public withRuleType(ruleType: string): ChangeBaselineWhiteListRequestBody {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: string  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): string | undefined {
        return this['rule_type'];
    }
    public withHostIdList(hostIdList: Array<string>): ChangeBaselineWhiteListRequestBody {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
    public withDescription(description: string): ChangeBaselineWhiteListRequestBody {
        this['description'] = description;
        return this;
    }
}