

export class BandwidthInfo {
    private 'begin_time'?: number | undefined;
    private 'end_time'?: number | undefined;
    private 'current_time'?: number | undefined;
    public bandwidth?: number;
    private 'next_expand_time'?: number | undefined;
    private 'expand_count'?: number | undefined;
    private 'expand_effect_time'?: number | undefined;
    private 'expand_interval_time'?: number | undefined;
    private 'max_expand_count'?: number | undefined;
    private 'task_running'?: boolean | undefined;
    public constructor() { 
    }
    public withBeginTime(beginTime: number): BandwidthInfo {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: number | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime() {
        return this['begin_time'];
    }
    public withEndTime(endTime: number): BandwidthInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withCurrentTime(currentTime: number): BandwidthInfo {
        this['current_time'] = currentTime;
        return this;
    }
    public set currentTime(currentTime: number | undefined) {
        this['current_time'] = currentTime;
    }
    public get currentTime() {
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
    public set nextExpandTime(nextExpandTime: number | undefined) {
        this['next_expand_time'] = nextExpandTime;
    }
    public get nextExpandTime() {
        return this['next_expand_time'];
    }
    public withExpandCount(expandCount: number): BandwidthInfo {
        this['expand_count'] = expandCount;
        return this;
    }
    public set expandCount(expandCount: number | undefined) {
        this['expand_count'] = expandCount;
    }
    public get expandCount() {
        return this['expand_count'];
    }
    public withExpandEffectTime(expandEffectTime: number): BandwidthInfo {
        this['expand_effect_time'] = expandEffectTime;
        return this;
    }
    public set expandEffectTime(expandEffectTime: number | undefined) {
        this['expand_effect_time'] = expandEffectTime;
    }
    public get expandEffectTime() {
        return this['expand_effect_time'];
    }
    public withExpandIntervalTime(expandIntervalTime: number): BandwidthInfo {
        this['expand_interval_time'] = expandIntervalTime;
        return this;
    }
    public set expandIntervalTime(expandIntervalTime: number | undefined) {
        this['expand_interval_time'] = expandIntervalTime;
    }
    public get expandIntervalTime() {
        return this['expand_interval_time'];
    }
    public withMaxExpandCount(maxExpandCount: number): BandwidthInfo {
        this['max_expand_count'] = maxExpandCount;
        return this;
    }
    public set maxExpandCount(maxExpandCount: number | undefined) {
        this['max_expand_count'] = maxExpandCount;
    }
    public get maxExpandCount() {
        return this['max_expand_count'];
    }
    public withTaskRunning(taskRunning: boolean): BandwidthInfo {
        this['task_running'] = taskRunning;
        return this;
    }
    public set taskRunning(taskRunning: boolean | undefined) {
        this['task_running'] = taskRunning;
    }
    public get taskRunning() {
        return this['task_running'];
    }
}