
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTrialsStatisticsResponse extends SdkResponse {
    private 'trial_num'?: number;
    private 'unprotected_num'?: number;
    public asset?: number;
    public vulnerability?: number;
    public intrusion?: number;
    public baseline?: number;
    public constructor() { 
        super();
    }
    public withTrialNum(trialNum: number): ShowTrialsStatisticsResponse {
        this['trial_num'] = trialNum;
        return this;
    }
    public set trialNum(trialNum: number  | undefined) {
        this['trial_num'] = trialNum;
    }
    public get trialNum(): number | undefined {
        return this['trial_num'];
    }
    public withUnprotectedNum(unprotectedNum: number): ShowTrialsStatisticsResponse {
        this['unprotected_num'] = unprotectedNum;
        return this;
    }
    public set unprotectedNum(unprotectedNum: number  | undefined) {
        this['unprotected_num'] = unprotectedNum;
    }
    public get unprotectedNum(): number | undefined {
        return this['unprotected_num'];
    }
    public withAsset(asset: number): ShowTrialsStatisticsResponse {
        this['asset'] = asset;
        return this;
    }
    public withVulnerability(vulnerability: number): ShowTrialsStatisticsResponse {
        this['vulnerability'] = vulnerability;
        return this;
    }
    public withIntrusion(intrusion: number): ShowTrialsStatisticsResponse {
        this['intrusion'] = intrusion;
        return this;
    }
    public withBaseline(baseline: number): ShowTrialsStatisticsResponse {
        this['baseline'] = baseline;
        return this;
    }
}