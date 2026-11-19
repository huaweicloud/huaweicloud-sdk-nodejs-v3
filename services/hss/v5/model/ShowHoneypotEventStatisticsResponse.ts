
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHoneypotEventStatisticsResponse extends SdkResponse {
    private 'risky_host_num'?: number;
    private 'protection_host_num'?: number;
    private 'critical_risky_num'?: number;
    private 'high_risky_num'?: number;
    private 'medium_risky_num'?: number;
    private 'low_risky_num'?: number;
    public constructor() { 
        super();
    }
    public withRiskyHostNum(riskyHostNum: number): ShowHoneypotEventStatisticsResponse {
        this['risky_host_num'] = riskyHostNum;
        return this;
    }
    public set riskyHostNum(riskyHostNum: number  | undefined) {
        this['risky_host_num'] = riskyHostNum;
    }
    public get riskyHostNum(): number | undefined {
        return this['risky_host_num'];
    }
    public withProtectionHostNum(protectionHostNum: number): ShowHoneypotEventStatisticsResponse {
        this['protection_host_num'] = protectionHostNum;
        return this;
    }
    public set protectionHostNum(protectionHostNum: number  | undefined) {
        this['protection_host_num'] = protectionHostNum;
    }
    public get protectionHostNum(): number | undefined {
        return this['protection_host_num'];
    }
    public withCriticalRiskyNum(criticalRiskyNum: number): ShowHoneypotEventStatisticsResponse {
        this['critical_risky_num'] = criticalRiskyNum;
        return this;
    }
    public set criticalRiskyNum(criticalRiskyNum: number  | undefined) {
        this['critical_risky_num'] = criticalRiskyNum;
    }
    public get criticalRiskyNum(): number | undefined {
        return this['critical_risky_num'];
    }
    public withHighRiskyNum(highRiskyNum: number): ShowHoneypotEventStatisticsResponse {
        this['high_risky_num'] = highRiskyNum;
        return this;
    }
    public set highRiskyNum(highRiskyNum: number  | undefined) {
        this['high_risky_num'] = highRiskyNum;
    }
    public get highRiskyNum(): number | undefined {
        return this['high_risky_num'];
    }
    public withMediumRiskyNum(mediumRiskyNum: number): ShowHoneypotEventStatisticsResponse {
        this['medium_risky_num'] = mediumRiskyNum;
        return this;
    }
    public set mediumRiskyNum(mediumRiskyNum: number  | undefined) {
        this['medium_risky_num'] = mediumRiskyNum;
    }
    public get mediumRiskyNum(): number | undefined {
        return this['medium_risky_num'];
    }
    public withLowRiskyNum(lowRiskyNum: number): ShowHoneypotEventStatisticsResponse {
        this['low_risky_num'] = lowRiskyNum;
        return this;
    }
    public set lowRiskyNum(lowRiskyNum: number  | undefined) {
        this['low_risky_num'] = lowRiskyNum;
    }
    public get lowRiskyNum(): number | undefined {
        return this['low_risky_num'];
    }
}