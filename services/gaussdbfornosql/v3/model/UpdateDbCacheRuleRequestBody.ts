

export class UpdateDbCacheRuleRequestBody {
    private 'dbcache_rule_id'?: string;
    private 'value_columns'?: Array<string>;
    public ttl?: string;
    private 'value_separator'?: string;
    public constructor(dbcacheRuleId?: string, valueColumns?: Array<string>) { 
        this['dbcache_rule_id'] = dbcacheRuleId;
        this['value_columns'] = valueColumns;
    }
    public withDbcacheRuleId(dbcacheRuleId: string): UpdateDbCacheRuleRequestBody {
        this['dbcache_rule_id'] = dbcacheRuleId;
        return this;
    }
    public set dbcacheRuleId(dbcacheRuleId: string  | undefined) {
        this['dbcache_rule_id'] = dbcacheRuleId;
    }
    public get dbcacheRuleId(): string | undefined {
        return this['dbcache_rule_id'];
    }
    public withValueColumns(valueColumns: Array<string>): UpdateDbCacheRuleRequestBody {
        this['value_columns'] = valueColumns;
        return this;
    }
    public set valueColumns(valueColumns: Array<string>  | undefined) {
        this['value_columns'] = valueColumns;
    }
    public get valueColumns(): Array<string> | undefined {
        return this['value_columns'];
    }
    public withTtl(ttl: string): UpdateDbCacheRuleRequestBody {
        this['ttl'] = ttl;
        return this;
    }
    public withValueSeparator(valueSeparator: string): UpdateDbCacheRuleRequestBody {
        this['value_separator'] = valueSeparator;
        return this;
    }
    public set valueSeparator(valueSeparator: string  | undefined) {
        this['value_separator'] = valueSeparator;
    }
    public get valueSeparator(): string | undefined {
        return this['value_separator'];
    }
}