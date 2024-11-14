

export class ListDbCacheRulesRequest {
    private 'dbcache_mapping_id'?: string;
    private 'rule_id'?: string;
    private 'rule_name'?: string;
    private 'source_db_schema'?: string;
    private 'source_db_table'?: string;
    public offset?: string;
    public limit?: string;
    public constructor(dbcacheMappingId?: string) { 
        this['dbcache_mapping_id'] = dbcacheMappingId;
    }
    public withDbcacheMappingId(dbcacheMappingId: string): ListDbCacheRulesRequest {
        this['dbcache_mapping_id'] = dbcacheMappingId;
        return this;
    }
    public set dbcacheMappingId(dbcacheMappingId: string  | undefined) {
        this['dbcache_mapping_id'] = dbcacheMappingId;
    }
    public get dbcacheMappingId(): string | undefined {
        return this['dbcache_mapping_id'];
    }
    public withRuleId(ruleId: string): ListDbCacheRulesRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withRuleName(ruleName: string): ListDbCacheRulesRequest {
        this['rule_name'] = ruleName;
        return this;
    }
    public set ruleName(ruleName: string  | undefined) {
        this['rule_name'] = ruleName;
    }
    public get ruleName(): string | undefined {
        return this['rule_name'];
    }
    public withSourceDbSchema(sourceDbSchema: string): ListDbCacheRulesRequest {
        this['source_db_schema'] = sourceDbSchema;
        return this;
    }
    public set sourceDbSchema(sourceDbSchema: string  | undefined) {
        this['source_db_schema'] = sourceDbSchema;
    }
    public get sourceDbSchema(): string | undefined {
        return this['source_db_schema'];
    }
    public withSourceDbTable(sourceDbTable: string): ListDbCacheRulesRequest {
        this['source_db_table'] = sourceDbTable;
        return this;
    }
    public set sourceDbTable(sourceDbTable: string  | undefined) {
        this['source_db_table'] = sourceDbTable;
    }
    public get sourceDbTable(): string | undefined {
        return this['source_db_table'];
    }
    public withOffset(offset: string): ListDbCacheRulesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListDbCacheRulesRequest {
        this['limit'] = limit;
        return this;
    }
}