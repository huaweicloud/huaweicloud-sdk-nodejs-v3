

export class BandwidthInfo {
    private 'begin_time'?: number;
    private 'end_time'?: number;
    private 'current_time'?: number;
    public bandwidth?: number;
    private 'next_expand_time'?: number;
    private 'expand_count'?: number;
    private 'expand_effect_time'?: number;
    private 'expand_interval_time'?: number;
    private 'max_expand_count'?: number;
    private 'task_running'?: boolean;
    private 'assured_bandwidth'?: number;
    private 'max_bandwidth_for_node'?: number;
    public constructor() { 
    }
    public withBeginTime(beginTime: number): BandwidthInfo {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: number  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): number | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: number): BandwidthInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withCurrentTime(currentTime: number): BandwidthInfo {
        this['current_time'] = currentTime;
        return this;
    }
    public set currentTime(currentTime: number  | undefined) {
        this['current_time'] = currentTime;
    }
    public get currentTime(): number | undefined {
        return this['current_time'];
    }
    public withBandwidth(bandwidth: number): BandwidthInfo {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withNextExpandTime(nextExpandTime: number): BandwidthInfo {
        this['next_expand_time'] = nextExpandTime;
        return this;
    }
    public set nextExpandTime(nextExpandTime: number  | undefined) {
        this['next_expand_time'] = nextExpandTime;
    }
    public get nextExpandTime(): number | undefined {
        return this['next_expand_time'];
    }
    public withExpandCount(expandCount: number): BandwidthInfo {
        this['expand_count'] = expandCount;
        return this;
    }
    public set expandCount(expandCount: number  | undefined) {
        this['expand_count'] = expandCount;
    }
    public get expandCount(): number | undefined {
        return this['expand_count'];
    }
    public withExpandEffectTime(expandEffectTime: number): BandwidthInfo {
        this['expand_effect_time'] = expandEffectTime;
        return this;
    }
    public set expandEffectTime(expandEffectTime: number  | undefined) {
        this['expand_effect_time'] = expandEffectTime;
    }
    public get expandEffectTime(): number | undefined {
        return this['expand_effect_time'];
    }
    public withExpandIntervalTime(expandIntervalTime: number): BandwidthInfo {
        this['expand_interval_time'] = expandIntervalTime;
        return this;
    }
    public set expandIntervalTime(expandIntervalTime: number  | undefined) {
        this['expand_interval_time'] = expandIntervalTime;
    }
    public get expandIntervalTime(): number | undefined {
        return this['expand_interval_time'];
    }
    public withMaxExpandCount(maxExpandCount: number): BandwidthInfo {
        this['max_expand_count'] = maxExpandCount;
        return this;
    }
    public set maxExpandCount(maxExpandCount: number  | undefined) {
        this['max_expand_count'] = maxExpandCount;
    }
    public get maxExpandCount(): number | undefined {
        return this['max_expand_count'];
    }
    public withTaskRunning(taskRunning: boolean): BandwidthInfo {
        this['task_running'] = taskRunning;
        return this;
    }
    public set taskRunning(taskRunning: boolean  | undefined) {
        this['task_running'] = taskRunning;
    }
    public get taskRunning(): boolean | undefined {
        return this['task_running'];
    }
    public withAssuredBandwidth(assuredBandwidth: number): BandwidthInfo {
        this['assured_bandwidth'] = assuredBandwidth;
        return this;
    }
    public set assuredBandwidth(assuredBandwidth: number  | undefined) {
        this['assured_bandwidth'] = assuredBandwidth;
    }
    public get assuredBandwidth(): number | undefined {
        return this['assured_bandwidth'];
    }
    public withMaxBandwidthForNode(maxBandwidthForNode: number): BandwidthInfo {
        this['max_bandwidth_for_node'] = maxBandwidthForNode;
        return this;
    }
    public set maxBandwidthForNode(maxBandwidthForNode: number  | undefined) {
        this['max_bandwidth_for_node'] = maxBandwidthForNode;
    }
    public get maxBandwidthForNode(): number | undefined {
        return this['max_bandwidth_for_node'];
    }
}