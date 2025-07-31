

export class BaselineWhiteListsResponseInfo {
    public id?: string;
    private 'rule_type'?: string;
    private 'os_type'?: string;
    private 'index_version'?: string;
    private 'check_type'?: string;
    public standard?: string;
    public tag?: string;
    private 'check_rule_name'?: string;
    public description?: string;
    public constructor() { 
    }
    public withId(id: string): BaselineWhiteListsResponseInfo {
        this['id'] = id;
        return this;
    }
    public withRuleType(ruleType: string): BaselineWhiteListsResponseInfo {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: string  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): string | undefined {
        return this['rule_type'];
    }
    public withOsType(osType: string): BaselineWhiteListsResponseInfo {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withIndexVersion(indexVersion: string): BaselineWhiteListsResponseInfo {
        this['index_version'] = indexVersion;
        return this;
    }
    public set indexVersion(indexVersion: string  | undefined) {
        this['index_version'] = indexVersion;
    }
    public get indexVersion(): string | undefined {
        return this['index_version'];
    }
    public withCheckType(checkType: string): BaselineWhiteListsResponseInfo {
        this['check_type'] = checkType;
        return this;
    }
    public set checkType(checkType: string  | undefined) {
        this['check_type'] = checkType;
    }
    public get checkType(): string | undefined {
        return this['check_type'];
    }
    public withStandard(standard: string): BaselineWhiteListsResponseInfo {
        this['standard'] = standard;
        return this;
    }
    public withTag(tag: string): BaselineWhiteListsResponseInfo {
        this['tag'] = tag;
        return this;
    }
    public withCheckRuleName(checkRuleName: string): BaselineWhiteListsResponseInfo {
        this['check_rule_name'] = checkRuleName;
        return this;
    }
    public set checkRuleName(checkRuleName: string  | undefined) {
        this['check_rule_name'] = checkRuleName;
    }
    public get checkRuleName(): string | undefined {
        return this['check_rule_name'];
    }
    public withDescription(description: string): BaselineWhiteListsResponseInfo {
        this['description'] = description;
        return this;
    }
}