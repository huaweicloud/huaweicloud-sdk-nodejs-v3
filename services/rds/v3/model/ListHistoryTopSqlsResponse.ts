import { TopSql } from './TopSql';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHistoryTopSqlsResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'top_sqls'?: Array<TopSql>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListHistoryTopSqlsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withTopSqls(topSqls: Array<TopSql>): ListHistoryTopSqlsResponse {
        this['top_sqls'] = topSqls;
        return this;
    }
    public set topSqls(topSqls: Array<TopSql>  | undefined) {
        this['top_sqls'] = topSqls;
    }
    public get topSqls(): Array<TopSql> | undefined {
        return this['top_sqls'];
    }
}