import { ScalingStrategyReqInfo } from './ScalingStrategyReqInfo';


export class UpdateAutoScalingPolicyRequestBody {
    public status?: string;
    private 'monitor_cycle'?: number;
    private 'silence_cycle'?: number;
    private 'enlarge_threshold'?: number;
    private 'max_flavor'?: string;
    private 'reduce_enabled'?: boolean;
    private 'max_read_only_count'?: number;
    private 'read_only_weight'?: number;
    private 'scaling_strategy'?: ScalingStrategyReqInfo;
    public constructor(status?: string, scalingStrategy?: ScalingStrategyReqInfo) { 
        this['status'] = status;
        this['scaling_strategy'] = scalingStrategy;
    }
    public withStatus(status: string): UpdateAutoScalingPolicyRequestBody {
        this['status'] = status;
        return this;
    }
    public withMonitorCycle(monitorCycle: number): UpdateAutoScalingPolicyRequestBody {
        this['monitor_cycle'] = monitorCycle;
        return this;
    }
    public set monitorCycle(monitorCycle: number  | undefined) {
        this['monitor_cycle'] = monitorCycle;
    }
    public get monitorCycle(): number | undefined {
        return this['monitor_cycle'];
    }
    public withSilenceCycle(silenceCycle: number): UpdateAutoScalingPolicyRequestBody {
        this['silence_cycle'] = silenceCycle;
        return this;
    }
    public set silenceCycle(silenceCycle: number  | undefined) {
        this['silence_cycle'] = silenceCycle;
    }
    public get silenceCycle(): number | undefined {
        return this['silence_cycle'];
    }
    public withEnlargeThreshold(enlargeThreshold: number): UpdateAutoScalingPolicyRequestBody {
        this['enlarge_threshold'] = enlargeThreshold;
        return this;
    }
    public set enlargeThreshold(enlargeThreshold: number  | undefined) {
        this['enlarge_threshold'] = enlargeThreshold;
    }
    public get enlargeThreshold(): number | undefined {
        return this['enlarge_threshold'];
    }
    public withMaxFlavor(maxFlavor: string): UpdateAutoScalingPolicyRequestBody {
        this['max_flavor'] = maxFlavor;
        return this;
    }
    public set maxFlavor(maxFlavor: string  | undefined) {
        this['max_flavor'] = maxFlavor;
    }
    public get maxFlavor(): string | undefined {
        return this['max_flavor'];
    }
    public withReduceEnabled(reduceEnabled: boolean): UpdateAutoScalingPolicyRequestBody {
        this['reduce_enabled'] = reduceEnabled;
        return this;
    }
    public set reduceEnabled(reduceEnabled: boolean  | undefined) {
        this['reduce_enabled'] = reduceEnabled;
    }
    public get reduceEnabled(): boolean | undefined {
        return this['reduce_enabled'];
    }
    public withMaxReadOnlyCount(maxReadOnlyCount: number): UpdateAutoScalingPolicyRequestBody {
        this['max_read_only_count'] = maxReadOnlyCount;
        return this;
    }
    public set maxReadOnlyCount(maxReadOnlyCount: number  | undefined) {
        this['max_read_only_count'] = maxReadOnlyCount;
    }
    public get maxReadOnlyCount(): number | undefined {
        return this['max_read_only_count'];
    }
    public withReadOnlyWeight(readOnlyWeight: number): UpdateAutoScalingPolicyRequestBody {
        this['read_only_weight'] = readOnlyWeight;
        return this;
    }
    public set readOnlyWeight(readOnlyWeight: number  | undefined) {
        this['read_only_weight'] = readOnlyWeight;
    }
    public get readOnlyWeight(): number | undefined {
        return this['read_only_weight'];
    }
    public withScalingStrategy(scalingStrategy: ScalingStrategyReqInfo): UpdateAutoScalingPolicyRequestBody {
        this['scaling_strategy'] = scalingStrategy;
        return this;
    }
    public set scalingStrategy(scalingStrategy: ScalingStrategyReqInfo  | undefined) {
        this['scaling_strategy'] = scalingStrategy;
    }
    public get scalingStrategy(): ScalingStrategyReqInfo | undefined {
        return this['scaling_strategy'];
    }
}