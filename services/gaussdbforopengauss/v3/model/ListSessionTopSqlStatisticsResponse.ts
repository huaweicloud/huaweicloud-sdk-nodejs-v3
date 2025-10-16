import { SessionTopSqlStatisticInfo } from './SessionTopSqlStatisticInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSessionTopSqlStatisticsResponse extends SdkResponse {
    public total?: number;
    private 'top_sql_info'?: Array<SessionTopSqlStatisticInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSessionTopSqlStatisticsResponse {
        this['total'] = total;
        return this;
    }
    public withTopSqlInfo(topSqlInfo: Array<SessionTopSqlStatisticInfo>): ListSessionTopSqlStatisticsResponse {
        this['top_sql_info'] = topSqlInfo;
        return this;
    }
    public set topSqlInfo(topSqlInfo: Array<SessionTopSqlStatisticInfo>  | undefined) {
        this['top_sql_info'] = topSqlInfo;
    }
    public get topSqlInfo(): Array<SessionTopSqlStatisticInfo> | undefined {
        return this['top_sql_info'];
    }
}