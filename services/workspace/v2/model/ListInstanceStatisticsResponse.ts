
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceStatisticsResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'unconfigured_model_count'?: number;
    private 'unconfigured_channel_count'?: number;
    private 'risk_count'?: number;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListInstanceStatisticsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withUnconfiguredModelCount(unconfiguredModelCount: number): ListInstanceStatisticsResponse {
        this['unconfigured_model_count'] = unconfiguredModelCount;
        return this;
    }
    public set unconfiguredModelCount(unconfiguredModelCount: number  | undefined) {
        this['unconfigured_model_count'] = unconfiguredModelCount;
    }
    public get unconfiguredModelCount(): number | undefined {
        return this['unconfigured_model_count'];
    }
    public withUnconfiguredChannelCount(unconfiguredChannelCount: number): ListInstanceStatisticsResponse {
        this['unconfigured_channel_count'] = unconfiguredChannelCount;
        return this;
    }
    public set unconfiguredChannelCount(unconfiguredChannelCount: number  | undefined) {
        this['unconfigured_channel_count'] = unconfiguredChannelCount;
    }
    public get unconfiguredChannelCount(): number | undefined {
        return this['unconfigured_channel_count'];
    }
    public withRiskCount(riskCount: number): ListInstanceStatisticsResponse {
        this['risk_count'] = riskCount;
        return this;
    }
    public set riskCount(riskCount: number  | undefined) {
        this['risk_count'] = riskCount;
    }
    public get riskCount(): number | undefined {
        return this['risk_count'];
    }
}