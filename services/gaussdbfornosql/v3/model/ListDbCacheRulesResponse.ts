import { QueryDBCacheRuleResponse } from './QueryDBCacheRuleResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDbCacheRulesResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'dbcache_mapping_id'?: string;
    public rules?: Array<QueryDBCacheRuleResponse>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListDbCacheRulesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withDbcacheMappingId(dbcacheMappingId: string): ListDbCacheRulesResponse {
        this['dbcache_mapping_id'] = dbcacheMappingId;
        return this;
    }
    public set dbcacheMappingId(dbcacheMappingId: string  | undefined) {
        this['dbcache_mapping_id'] = dbcacheMappingId;
    }
    public get dbcacheMappingId(): string | undefined {
        return this['dbcache_mapping_id'];
    }
    public withRules(rules: Array<QueryDBCacheRuleResponse>): ListDbCacheRulesResponse {
        this['rules'] = rules;
        return this;
    }
}