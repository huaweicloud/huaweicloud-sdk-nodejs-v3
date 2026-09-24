

export class ReadOnlyScalingStrategy {
    private 'read_only_enlarge_enabled'?: string;
    private 'read_only_reduce_enabled'?: string;
    private 'read_only_monitor_cycle'?: string;
    private 'read_only_silence_cycle'?: string;
    private 'max_read_only_count'?: string;
    private 'read_only_enlarge_threshold'?: string;
    private 'read_only_flavor'?: string;
    private 'min_read_only_count'?: string;
    private 'read_only_reduce_threshold'?: string;
    public constructor() { 
    }
    public withReadOnlyEnlargeEnabled(readOnlyEnlargeEnabled: string): ReadOnlyScalingStrategy {
        this['read_only_enlarge_enabled'] = readOnlyEnlargeEnabled;
        return this;
    }
    public set readOnlyEnlargeEnabled(readOnlyEnlargeEnabled: string  | undefined) {
        this['read_only_enlarge_enabled'] = readOnlyEnlargeEnabled;
    }
    public get readOnlyEnlargeEnabled(): string | undefined {
        return this['read_only_enlarge_enabled'];
    }
    public withReadOnlyReduceEnabled(readOnlyReduceEnabled: string): ReadOnlyScalingStrategy {
        this['read_only_reduce_enabled'] = readOnlyReduceEnabled;
        return this;
    }
    public set readOnlyReduceEnabled(readOnlyReduceEnabled: string  | undefined) {
        this['read_only_reduce_enabled'] = readOnlyReduceEnabled;
    }
    public get readOnlyReduceEnabled(): string | undefined {
        return this['read_only_reduce_enabled'];
    }
    public withReadOnlyMonitorCycle(readOnlyMonitorCycle: string): ReadOnlyScalingStrategy {
        this['read_only_monitor_cycle'] = readOnlyMonitorCycle;
        return this;
    }
    public set readOnlyMonitorCycle(readOnlyMonitorCycle: string  | undefined) {
        this['read_only_monitor_cycle'] = readOnlyMonitorCycle;
    }
    public get readOnlyMonitorCycle(): string | undefined {
        return this['read_only_monitor_cycle'];
    }
    public withReadOnlySilenceCycle(readOnlySilenceCycle: string): ReadOnlyScalingStrategy {
        this['read_only_silence_cycle'] = readOnlySilenceCycle;
        return this;
    }
    public set readOnlySilenceCycle(readOnlySilenceCycle: string  | undefined) {
        this['read_only_silence_cycle'] = readOnlySilenceCycle;
    }
    public get readOnlySilenceCycle(): string | undefined {
        return this['read_only_silence_cycle'];
    }
    public withMaxReadOnlyCount(maxReadOnlyCount: string): ReadOnlyScalingStrategy {
        this['max_read_only_count'] = maxReadOnlyCount;
        return this;
    }
    public set maxReadOnlyCount(maxReadOnlyCount: string  | undefined) {
        this['max_read_only_count'] = maxReadOnlyCount;
    }
    public get maxReadOnlyCount(): string | undefined {
        return this['max_read_only_count'];
    }
    public withReadOnlyEnlargeThreshold(readOnlyEnlargeThreshold: string): ReadOnlyScalingStrategy {
        this['read_only_enlarge_threshold'] = readOnlyEnlargeThreshold;
        return this;
    }
    public set readOnlyEnlargeThreshold(readOnlyEnlargeThreshold: string  | undefined) {
        this['read_only_enlarge_threshold'] = readOnlyEnlargeThreshold;
    }
    public get readOnlyEnlargeThreshold(): string | undefined {
        return this['read_only_enlarge_threshold'];
    }
    public withReadOnlyFlavor(readOnlyFlavor: string): ReadOnlyScalingStrategy {
        this['read_only_flavor'] = readOnlyFlavor;
        return this;
    }
    public set readOnlyFlavor(readOnlyFlavor: string  | undefined) {
        this['read_only_flavor'] = readOnlyFlavor;
    }
    public get readOnlyFlavor(): string | undefined {
        return this['read_only_flavor'];
    }
    public withMinReadOnlyCount(minReadOnlyCount: string): ReadOnlyScalingStrategy {
        this['min_read_only_count'] = minReadOnlyCount;
        return this;
    }
    public set minReadOnlyCount(minReadOnlyCount: string  | undefined) {
        this['min_read_only_count'] = minReadOnlyCount;
    }
    public get minReadOnlyCount(): string | undefined {
        return this['min_read_only_count'];
    }
    public withReadOnlyReduceThreshold(readOnlyReduceThreshold: string): ReadOnlyScalingStrategy {
        this['read_only_reduce_threshold'] = readOnlyReduceThreshold;
        return this;
    }
    public set readOnlyReduceThreshold(readOnlyReduceThreshold: string  | undefined) {
        this['read_only_reduce_threshold'] = readOnlyReduceThreshold;
    }
    public get readOnlyReduceThreshold(): string | undefined {
        return this['read_only_reduce_threshold'];
    }
}