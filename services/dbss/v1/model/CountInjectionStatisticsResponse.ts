import { InjectionStatisticsBean } from './InjectionStatisticsBean';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountInjectionStatisticsResponse extends SdkResponse {
    private 'generate_time'?: string;
    private 'injection_statistics'?: Array<InjectionStatisticsBean>;
    public status?: string;
    public constructor() { 
        super();
    }
    public withGenerateTime(generateTime: string): CountInjectionStatisticsResponse {
        this['generate_time'] = generateTime;
        return this;
    }
    public set generateTime(generateTime: string  | undefined) {
        this['generate_time'] = generateTime;
    }
    public get generateTime(): string | undefined {
        return this['generate_time'];
    }
    public withInjectionStatistics(injectionStatistics: Array<InjectionStatisticsBean>): CountInjectionStatisticsResponse {
        this['injection_statistics'] = injectionStatistics;
        return this;
    }
    public set injectionStatistics(injectionStatistics: Array<InjectionStatisticsBean>  | undefined) {
        this['injection_statistics'] = injectionStatistics;
    }
    public get injectionStatistics(): Array<InjectionStatisticsBean> | undefined {
        return this['injection_statistics'];
    }
    public withStatus(status: string): CountInjectionStatisticsResponse {
        this['status'] = status;
        return this;
    }
}