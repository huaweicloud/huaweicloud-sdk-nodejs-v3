import { TopSQLInfoResult } from './TopSQLInfoResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTopSqlsResponse extends SdkResponse {
    public total?: number;
    private 'top_sql_infos'?: Array<TopSQLInfoResult>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListTopSqlsResponse {
        this['total'] = total;
        return this;
    }
    public withTopSqlInfos(topSqlInfos: Array<TopSQLInfoResult>): ListTopSqlsResponse {
        this['top_sql_infos'] = topSqlInfos;
        return this;
    }
    public set topSqlInfos(topSqlInfos: Array<TopSQLInfoResult>  | undefined) {
        this['top_sql_infos'] = topSqlInfos;
    }
    public get topSqlInfos(): Array<TopSQLInfoResult> | undefined {
        return this['top_sql_infos'];
    }
}