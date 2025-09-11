import { CountStatisticsBean } from './CountStatisticsBean';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountSqlTrendStatisticsResponse extends SdkResponse {
    private 'count_statistics'?: Array<CountStatisticsBean>;
    private 'generate_time'?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withCountStatistics(countStatistics: Array<CountStatisticsBean>): CountSqlTrendStatisticsResponse {
        this['count_statistics'] = countStatistics;
        return this;
    }
    public set countStatistics(countStatistics: Array<CountStatisticsBean>  | undefined) {
        this['count_statistics'] = countStatistics;
    }
    public get countStatistics(): Array<CountStatisticsBean> | undefined {
        return this['count_statistics'];
    }
    public withGenerateTime(generateTime: string): CountSqlTrendStatisticsResponse {
        this['generate_time'] = generateTime;
        return this;
    }
    public set generateTime(generateTime: string  | undefined) {
        this['generate_time'] = generateTime;
    }
    public get generateTime(): string | undefined {
        return this['generate_time'];
    }
    public withStatus(status: string): CountSqlTrendStatisticsResponse {
        this['status'] = status;
        return this;
    }
}