import { SQLStatisticsBean } from './SQLStatisticsBean';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountSqlStatisticsResponse extends SdkResponse {
    private 'generate_time'?: string;
    private 'sql_statistics'?: Array<SQLStatisticsBean>;
    public status?: string;
    public constructor() { 
        super();
    }
    public withGenerateTime(generateTime: string): CountSqlStatisticsResponse {
        this['generate_time'] = generateTime;
        return this;
    }
    public set generateTime(generateTime: string  | undefined) {
        this['generate_time'] = generateTime;
    }
    public get generateTime(): string | undefined {
        return this['generate_time'];
    }
    public withSqlStatistics(sqlStatistics: Array<SQLStatisticsBean>): CountSqlStatisticsResponse {
        this['sql_statistics'] = sqlStatistics;
        return this;
    }
    public set sqlStatistics(sqlStatistics: Array<SQLStatisticsBean>  | undefined) {
        this['sql_statistics'] = sqlStatistics;
    }
    public get sqlStatistics(): Array<SQLStatisticsBean> | undefined {
        return this['sql_statistics'];
    }
    public withStatus(status: string): CountSqlStatisticsResponse {
        this['status'] = status;
        return this;
    }
}