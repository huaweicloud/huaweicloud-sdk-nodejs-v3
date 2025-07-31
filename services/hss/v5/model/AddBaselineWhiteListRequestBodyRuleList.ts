

export class AddBaselineWhiteListRequestBodyRuleList {
    private 'index_version'?: string;
    private 'check_type'?: string;
    public standard?: string;
    public constructor() { 
    }
    public withIndexVersion(indexVersion: string): AddBaselineWhiteListRequestBodyRuleList {
        this['index_version'] = indexVersion;
        return this;
    }
    public set indexVersion(indexVersion: string  | undefined) {
        this['index_version'] = indexVersion;
    }
    public get indexVersion(): string | undefined {
        return this['index_version'];
    }
    public withCheckType(checkType: string): AddBaselineWhiteListRequestBodyRuleList {
        this['check_type'] = checkType;
        return this;
    }
    public set checkType(checkType: string  | undefined) {
        this['check_type'] = checkType;
    }
    public get checkType(): string | undefined {
        return this['check_type'];
    }
    public withStandard(standard: string): AddBaselineWhiteListRequestBodyRuleList {
        this['standard'] = standard;
        return this;
    }
}