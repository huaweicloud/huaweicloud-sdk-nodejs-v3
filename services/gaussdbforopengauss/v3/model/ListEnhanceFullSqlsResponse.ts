import { FullSqlResult } from './FullSqlResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEnhanceFullSqlsResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'full_sqls'?: Array<FullSqlResult>;
    private 'limit_count'?: number;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListEnhanceFullSqlsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withFullSqls(fullSqls: Array<FullSqlResult>): ListEnhanceFullSqlsResponse {
        this['full_sqls'] = fullSqls;
        return this;
    }
    public set fullSqls(fullSqls: Array<FullSqlResult>  | undefined) {
        this['full_sqls'] = fullSqls;
    }
    public get fullSqls(): Array<FullSqlResult> | undefined {
        return this['full_sqls'];
    }
    public withLimitCount(limitCount: number): ListEnhanceFullSqlsResponse {
        this['limit_count'] = limitCount;
        return this;
    }
    public set limitCount(limitCount: number  | undefined) {
        this['limit_count'] = limitCount;
    }
    public get limitCount(): number | undefined {
        return this['limit_count'];
    }
}