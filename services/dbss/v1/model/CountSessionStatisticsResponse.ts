import { SessionStatisticsBean } from './SessionStatisticsBean';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountSessionStatisticsResponse extends SdkResponse {
    private 'generate_time'?: string;
    private 'session_statistics'?: Array<SessionStatisticsBean>;
    public status?: string;
    public constructor() { 
        super();
    }
    public withGenerateTime(generateTime: string): CountSessionStatisticsResponse {
        this['generate_time'] = generateTime;
        return this;
    }
    public set generateTime(generateTime: string  | undefined) {
        this['generate_time'] = generateTime;
    }
    public get generateTime(): string | undefined {
        return this['generate_time'];
    }
    public withSessionStatistics(sessionStatistics: Array<SessionStatisticsBean>): CountSessionStatisticsResponse {
        this['session_statistics'] = sessionStatistics;
        return this;
    }
    public set sessionStatistics(sessionStatistics: Array<SessionStatisticsBean>  | undefined) {
        this['session_statistics'] = sessionStatistics;
    }
    public get sessionStatistics(): Array<SessionStatisticsBean> | undefined {
        return this['session_statistics'];
    }
    public withStatus(status: string): CountSessionStatisticsResponse {
        this['status'] = status;
        return this;
    }
}