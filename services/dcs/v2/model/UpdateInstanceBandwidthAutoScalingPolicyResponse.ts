import { BandwidthAutoScalingPolicy } from './BandwidthAutoScalingPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateInstanceBandwidthAutoScalingPolicyResponse extends SdkResponse {
    private 'window_size'?: UpdateInstanceBandwidthAutoScalingPolicyResponseWindowSizeEnum | number;
    private 'bandwidth_usage_upper_threshold'?: UpdateInstanceBandwidthAutoScalingPolicyResponseBandwidthUsageUpperThresholdEnum | number;
    private 'scale_out_cooldown'?: number;
    private 'scale_in_enabled'?: boolean;
    private 'bandwidth_usage_lower_threshold'?: number;
    private 'scale_in_cooldown'?: number;
    public constructor(windowSize?: number, bandwidthUsageUpperThreshold?: number, scaleOutCooldown?: number) { 
        super();
        this['window_size'] = windowSize;
        this['bandwidth_usage_upper_threshold'] = bandwidthUsageUpperThreshold;
        this['scale_out_cooldown'] = scaleOutCooldown;
    }
    public withWindowSize(windowSize: UpdateInstanceBandwidthAutoScalingPolicyResponseWindowSizeEnum | number): UpdateInstanceBandwidthAutoScalingPolicyResponse {
        this['window_size'] = windowSize;
        return this;
    }
    public set windowSize(windowSize: UpdateInstanceBandwidthAutoScalingPolicyResponseWindowSizeEnum | number  | undefined) {
        this['window_size'] = windowSize;
    }
    public get windowSize(): UpdateInstanceBandwidthAutoScalingPolicyResponseWindowSizeEnum | number | undefined {
        return this['window_size'];
    }
    public withBandwidthUsageUpperThreshold(bandwidthUsageUpperThreshold: UpdateInstanceBandwidthAutoScalingPolicyResponseBandwidthUsageUpperThresholdEnum | number): UpdateInstanceBandwidthAutoScalingPolicyResponse {
        this['bandwidth_usage_upper_threshold'] = bandwidthUsageUpperThreshold;
        return this;
    }
    public set bandwidthUsageUpperThreshold(bandwidthUsageUpperThreshold: UpdateInstanceBandwidthAutoScalingPolicyResponseBandwidthUsageUpperThresholdEnum | number  | undefined) {
        this['bandwidth_usage_upper_threshold'] = bandwidthUsageUpperThreshold;
    }
    public get bandwidthUsageUpperThreshold(): UpdateInstanceBandwidthAutoScalingPolicyResponseBandwidthUsageUpperThresholdEnum | number | undefined {
        return this['bandwidth_usage_upper_threshold'];
    }
    public withScaleOutCooldown(scaleOutCooldown: number): UpdateInstanceBandwidthAutoScalingPolicyResponse {
        this['scale_out_cooldown'] = scaleOutCooldown;
        return this;
    }
    public set scaleOutCooldown(scaleOutCooldown: number  | undefined) {
        this['scale_out_cooldown'] = scaleOutCooldown;
    }
    public get scaleOutCooldown(): number | undefined {
        return this['scale_out_cooldown'];
    }
    public withScaleInEnabled(scaleInEnabled: boolean): UpdateInstanceBandwidthAutoScalingPolicyResponse {
        this['scale_in_enabled'] = scaleInEnabled;
        return this;
    }
    public set scaleInEnabled(scaleInEnabled: boolean  | undefined) {
        this['scale_in_enabled'] = scaleInEnabled;
    }
    public get scaleInEnabled(): boolean | undefined {
        return this['scale_in_enabled'];
    }
    public withBandwidthUsageLowerThreshold(bandwidthUsageLowerThreshold: number): UpdateInstanceBandwidthAutoScalingPolicyResponse {
        this['bandwidth_usage_lower_threshold'] = bandwidthUsageLowerThreshold;
        return this;
    }
    public set bandwidthUsageLowerThreshold(bandwidthUsageLowerThreshold: number  | undefined) {
        this['bandwidth_usage_lower_threshold'] = bandwidthUsageLowerThreshold;
    }
    public get bandwidthUsageLowerThreshold(): number | undefined {
        return this['bandwidth_usage_lower_threshold'];
    }
    public withScaleInCooldown(scaleInCooldown: number): UpdateInstanceBandwidthAutoScalingPolicyResponse {
        this['scale_in_cooldown'] = scaleInCooldown;
        return this;
    }
    public set scaleInCooldown(scaleInCooldown: number  | undefined) {
        this['scale_in_cooldown'] = scaleInCooldown;
    }
    public get scaleInCooldown(): number | undefined {
        return this['scale_in_cooldown'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateInstanceBandwidthAutoScalingPolicyResponseWindowSizeEnum {
    NUMBER_1 = 1,
    NUMBER_5 = 5,
    NUMBER_10 = 10,
    NUMBER_15 = 15,
    NUMBER_30 = 30
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateInstanceBandwidthAutoScalingPolicyResponseBandwidthUsageUpperThresholdEnum {
    NUMBER_50 = 50,
    NUMBER_60 = 60,
    NUMBER_70 = 70,
    NUMBER_80 = 80,
    NUMBER_90 = 90,
    NUMBER_95 = 95
}
