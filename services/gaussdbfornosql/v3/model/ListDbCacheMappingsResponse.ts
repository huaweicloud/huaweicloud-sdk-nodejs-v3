import { QueryDBCacheMappingResponse } from './QueryDBCacheMappingResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDbCacheMappingsResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'dbcache_mappings'?: Array<QueryDBCacheMappingResponse>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListDbCacheMappingsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withDbcacheMappings(dbcacheMappings: Array<QueryDBCacheMappingResponse>): ListDbCacheMappingsResponse {
        this['dbcache_mappings'] = dbcacheMappings;
        return this;
    }
    public set dbcacheMappings(dbcacheMappings: Array<QueryDBCacheMappingResponse>  | undefined) {
        this['dbcache_mappings'] = dbcacheMappings;
    }
    public get dbcacheMappings(): Array<QueryDBCacheMappingResponse> | undefined {
        return this['dbcache_mappings'];
    }
}