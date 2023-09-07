

export class DbOrTableRenameRule {
    private 'prefix_name'?: string;
    private 'suffix_name'?: string;
    public type?: DbOrTableRenameRuleTypeEnum | string;
    public constructor() { 
    }
    public withPrefixName(prefixName: string): DbOrTableRenameRule {
        this['prefix_name'] = prefixName;
        return this;
    }
    public set prefixName(prefixName: string  | undefined) {
        this['prefix_name'] = prefixName;
    }
    public get prefixName(): string | undefined {
        return this['prefix_name'];
    }
    public withSuffixName(suffixName: string): DbOrTableRenameRule {
        this['suffix_name'] = suffixName;
        return this;
    }
    public set suffixName(suffixName: string  | undefined) {
        this['suffix_name'] = suffixName;
    }
    public get suffixName(): string | undefined {
        return this['suffix_name'];
    }
    public withType(type: DbOrTableRenameRuleTypeEnum | string): DbOrTableRenameRule {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DbOrTableRenameRuleTypeEnum {
    PREFIXANDSUFFIX = 'prefixAndSuffix',
    MANYTOONE = 'manyToOne'
}
