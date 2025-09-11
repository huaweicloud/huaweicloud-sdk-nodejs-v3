import { RiskStatisticsBean } from './RiskStatisticsBean';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountRiskTrendStatisticsResponse extends SdkResponse {
    private 'generate_time'?: string;
    private 'risk_statistics'?: Array<RiskStatisticsBean>;
    public status?: string;
    public constructor() { 
        super();
    }
    public withGenerateTime(generateTime: string): CountRiskTrendStatisticsResponse {
        this['generate_time'] = generateTime;
        return this;
    }
    public set generateTime(generateTime: string  | undefined) {
        this['generate_time'] = generateTime;
    }
    public get generateTime(): string | undefined {
        return this['generate_time'];
    }
    public withRiskStatistics(riskStatistics: Array<RiskStatisticsBean>): CountRiskTrendStatisticsResponse {
        this['risk_statistics'] = riskStatistics;
        return this;
    }
    public set riskStatistics(riskStatistics: Array<RiskStatisticsBean>  | undefined) {
        this['risk_statistics'] = riskStatistics;
    }
    public get riskStatistics(): Array<RiskStatisticsBean> | undefined {
        return this['risk_statistics'];
    }
    public withStatus(status: string): CountRiskTrendStatisticsResponse {
        this['status'] = status;
        return this;
    }
}