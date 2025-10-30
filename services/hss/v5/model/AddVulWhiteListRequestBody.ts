

export class AddVulWhiteListRequestBody {
    private 'vul_type'?: string;
    private 'vul_ids'?: Array<string>;
    private 'rule_type'?: string;
    private 'host_ids'?: Array<string>;
    private 'with_ignore'?: boolean;
    public description?: string;
    public constructor(vulType?: string, vulIds?: Array<string>, ruleType?: string) { 
        this['vul_type'] = vulType;
        this['vul_ids'] = vulIds;
        this['rule_type'] = ruleType;
    }
    public withVulType(vulType: string): AddVulWhiteListRequestBody {
        this['vul_type'] = vulType;
        return this;
    }
    public set vulType(vulType: string  | undefined) {
        this['vul_type'] = vulType;
    }
    public get vulType(): string | undefined {
        return this['vul_type'];
    }
    public withVulIds(vulIds: Array<string>): AddVulWhiteListRequestBody {
        this['vul_ids'] = vulIds;
        return this;
    }
    public set vulIds(vulIds: Array<string>  | undefined) {
        this['vul_ids'] = vulIds;
    }
    public get vulIds(): Array<string> | undefined {
        return this['vul_ids'];
    }
    public withRuleType(ruleType: string): AddVulWhiteListRequestBody {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: string  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): string | undefined {
        return this['rule_type'];
    }
    public withHostIds(hostIds: Array<string>): AddVulWhiteListRequestBody {
        this['host_ids'] = hostIds;
        return this;
    }
    public set hostIds(hostIds: Array<string>  | undefined) {
        this['host_ids'] = hostIds;
    }
    public get hostIds(): Array<string> | undefined {
        return this['host_ids'];
    }
    public withWithIgnore(withIgnore: boolean): AddVulWhiteListRequestBody {
        this['with_ignore'] = withIgnore;
        return this;
    }
    public set withIgnore(withIgnore: boolean  | undefined) {
        this['with_ignore'] = withIgnore;
    }
    public get withIgnore(): boolean | undefined {
        return this['with_ignore'];
    }
    public withDescription(description: string): AddVulWhiteListRequestBody {
        this['description'] = description;
        return this;
    }
}