import { ReadOnlyScalingStrategy } from './ReadOnlyScalingStrategy';


export class SetAutoScalingPolicyRequestBody {
    public status?: string;
    private 'monitor_cycle'?: number;
    private 'silence_cycle'?: number;
    private 'enlarge_threshold'?: number;
    private 'max_flavor'?: string;
    private 'reduce_enabled'?: string;
    private 'reduce_threshold'?: number;
    private 'min_flavor'?: string;
    private 'read_only_scaling_strategy'?: ReadOnlyScalingStrategy;
    public constructor(status?: string) { 
        this['status'] = status;
    }
    public withStatus(status: string): SetAutoScalingPolicyRequestBody {
        this['status'] = status;
        return this;
    }
    public withMonitorCycle(monitorCycle: number): SetAutoScalingPolicyRequestBody {
        this['monitor_cycle'] = monitorCycle;
        return this;
    }
    public set monitorCycle(monitorCycle: number  | undefined) {
        this['monitor_cycle'] = monitorCycle;
    }
    public get monitorCycle(): number | undefined {
        return this['monitor_cycle'];
    }
    public withSilenceCycle(silenceCycle: number): SetAutoScalingPolicyRequestBody {
        this['silence_cycle'] = silenceCycle;
        return this;
    }
    public set silenceCycle(silenceCycle: number  | undefined) {
        this['silence_cycle'] = silenceCycle;
    }
    public get silenceCycle(): number | undefined {
        return this['silence_cycle'];
    }
    public withEnlargeThreshold(enlargeThreshold: number): SetAutoScalingPolicyRequestBody {
        this['enlarge_threshold'] = enlargeThreshold;
        return this;
    }
    public set enlargeThreshold(enlargeThreshold: number  | undefined) {
        this['enlarge_threshold'] = enlargeThreshold;
    }
    public get enlargeThreshold(): number | undefined {
        return this['enlarge_threshold'];
    }
    public withMaxFlavor(maxFlavor: string): SetAutoScalingPolicyRequestBody {
        this['max_flavor'] = maxFlavor;
        return this;
    }
    public set maxFlavor(maxFlavor: string  | undefined) {
        this['max_flavor'] = maxFlavor;
    }
    public get maxFlavor(): string | undefined {
        return this['max_flavor'];
    }
    public withReduceEnabled(reduceEnabled: string): SetAutoScalingPolicyRequestBody {
        this['reduce_enabled'] = reduceEnabled;
        return this;
    }
    public set reduceEnabled(reduceEnabled: string  | undefined) {
        this['reduce_enabled'] = reduceEnabled;
    }
    public get reduceEnabled(): string | undefined {
        return this['reduce_enabled'];
    }
    public withReduceThreshold(reduceThreshold: number): SetAutoScalingPolicyRequestBody {
        this['reduce_threshold'] = reduceThreshold;
        return this;
    }
    public set reduceThreshold(reduceThreshold: number  | undefined) {
        this['reduce_threshold'] = reduceThreshold;
    }
    public get reduceThreshold(): number | undefined {
        return this['reduce_threshold'];
    }
    public withMinFlavor(minFlavor: string): SetAutoScalingPolicyRequestBody {
        this['min_flavor'] = minFlavor;
        return this;
    }
    public set minFlavor(minFlavor: string  | undefined) {
        this['min_flavor'] = minFlavor;
    }
    public get minFlavor(): string | undefined {
        return this['min_flavor'];
    }
    public withReadOnlyScalingStrategy(readOnlyScalingStrategy: ReadOnlyScalingStrategy): SetAutoScalingPolicyRequestBody {
        this['read_only_scaling_strategy'] = readOnlyScalingStrategy;
        return this;
    }
    public set readOnlyScalingStrategy(readOnlyScalingStrategy: ReadOnlyScalingStrategy  | undefined) {
        this['read_only_scaling_strategy'] = readOnlyScalingStrategy;
    }
    public get readOnlyScalingStrategy(): ReadOnlyScalingStrategy | undefined {
        return this['read_only_scaling_strategy'];
    }
}