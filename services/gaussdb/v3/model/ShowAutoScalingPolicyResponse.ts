import { ScalingStrategyInfo } from './ScalingStrategyInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAutoScalingPolicyResponse extends SdkResponse {
    public id?: string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    public status?: string;
    private 'monitor_cycle'?: number;
    private 'silence_cycle'?: number;
    private 'enlarge_threshold'?: number;
    private 'max_flavor'?: string;
    private 'reduce_enabled'?: boolean;
    private 'min_flavor'?: string;
    private 'silence_start_at'?: string;
    private 'scaling_strategy'?: ScalingStrategyInfo;
    private 'max_read_only_count'?: number;
    private 'min_read_only_count'?: number;
    private 'read_only_weight'?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowAutoScalingPolicyResponse {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): ShowAutoScalingPolicyResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): ShowAutoScalingPolicyResponse {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withStatus(status: string): ShowAutoScalingPolicyResponse {
        this['status'] = status;
        return this;
    }
    public withMonitorCycle(monitorCycle: number): ShowAutoScalingPolicyResponse {
        this['monitor_cycle'] = monitorCycle;
        return this;
    }
    public set monitorCycle(monitorCycle: number  | undefined) {
        this['monitor_cycle'] = monitorCycle;
    }
    public get monitorCycle(): number | undefined {
        return this['monitor_cycle'];
    }
    public withSilenceCycle(silenceCycle: number): ShowAutoScalingPolicyResponse {
        this['silence_cycle'] = silenceCycle;
        return this;
    }
    public set silenceCycle(silenceCycle: number  | undefined) {
        this['silence_cycle'] = silenceCycle;
    }
    public get silenceCycle(): number | undefined {
        return this['silence_cycle'];
    }
    public withEnlargeThreshold(enlargeThreshold: number): ShowAutoScalingPolicyResponse {
        this['enlarge_threshold'] = enlargeThreshold;
        return this;
    }
    public set enlargeThreshold(enlargeThreshold: number  | undefined) {
        this['enlarge_threshold'] = enlargeThreshold;
    }
    public get enlargeThreshold(): number | undefined {
        return this['enlarge_threshold'];
    }
    public withMaxFlavor(maxFlavor: string): ShowAutoScalingPolicyResponse {
        this['max_flavor'] = maxFlavor;
        return this;
    }
    public set maxFlavor(maxFlavor: string  | undefined) {
        this['max_flavor'] = maxFlavor;
    }
    public get maxFlavor(): string | undefined {
        return this['max_flavor'];
    }
    public withReduceEnabled(reduceEnabled: boolean): ShowAutoScalingPolicyResponse {
        this['reduce_enabled'] = reduceEnabled;
        return this;
    }
    public set reduceEnabled(reduceEnabled: boolean  | undefined) {
        this['reduce_enabled'] = reduceEnabled;
    }
    public get reduceEnabled(): boolean | undefined {
        return this['reduce_enabled'];
    }
    public withMinFlavor(minFlavor: string): ShowAutoScalingPolicyResponse {
        this['min_flavor'] = minFlavor;
        return this;
    }
    public set minFlavor(minFlavor: string  | undefined) {
        this['min_flavor'] = minFlavor;
    }
    public get minFlavor(): string | undefined {
        return this['min_flavor'];
    }
    public withSilenceStartAt(silenceStartAt: string): ShowAutoScalingPolicyResponse {
        this['silence_start_at'] = silenceStartAt;
        return this;
    }
    public set silenceStartAt(silenceStartAt: string  | undefined) {
        this['silence_start_at'] = silenceStartAt;
    }
    public get silenceStartAt(): string | undefined {
        return this['silence_start_at'];
    }
    public withScalingStrategy(scalingStrategy: ScalingStrategyInfo): ShowAutoScalingPolicyResponse {
        this['scaling_strategy'] = scalingStrategy;
        return this;
    }
    public set scalingStrategy(scalingStrategy: ScalingStrategyInfo  | undefined) {
        this['scaling_strategy'] = scalingStrategy;
    }
    public get scalingStrategy(): ScalingStrategyInfo | undefined {
        return this['scaling_strategy'];
    }
    public withMaxReadOnlyCount(maxReadOnlyCount: number): ShowAutoScalingPolicyResponse {
        this['max_read_only_count'] = maxReadOnlyCount;
        return this;
    }
    public set maxReadOnlyCount(maxReadOnlyCount: number  | undefined) {
        this['max_read_only_count'] = maxReadOnlyCount;
    }
    public get maxReadOnlyCount(): number | undefined {
        return this['max_read_only_count'];
    }
    public withMinReadOnlyCount(minReadOnlyCount: number): ShowAutoScalingPolicyResponse {
        this['min_read_only_count'] = minReadOnlyCount;
        return this;
    }
    public set minReadOnlyCount(minReadOnlyCount: number  | undefined) {
        this['min_read_only_count'] = minReadOnlyCount;
    }
    public get minReadOnlyCount(): number | undefined {
        return this['min_read_only_count'];
    }
    public withReadOnlyWeight(readOnlyWeight: number): ShowAutoScalingPolicyResponse {
        this['read_only_weight'] = readOnlyWeight;
        return this;
    }
    public set readOnlyWeight(readOnlyWeight: number  | undefined) {
        this['read_only_weight'] = readOnlyWeight;
    }
    public get readOnlyWeight(): number | undefined {
        return this['read_only_weight'];
    }
}