

export class JobScheduleDailyFrequencyInfo {
    private 'freq_subday_type'?: string;
    private 'active_start_time'?: string;
    private 'active_end_time'?: string;
    private 'freq_subday_interval'?: number;
    private 'freq_interval_unit'?: string;
    public constructor() { 
    }
    public withFreqSubdayType(freqSubdayType: string): JobScheduleDailyFrequencyInfo {
        this['freq_subday_type'] = freqSubdayType;
        return this;
    }
    public set freqSubdayType(freqSubdayType: string  | undefined) {
        this['freq_subday_type'] = freqSubdayType;
    }
    public get freqSubdayType(): string | undefined {
        return this['freq_subday_type'];
    }
    public withActiveStartTime(activeStartTime: string): JobScheduleDailyFrequencyInfo {
        this['active_start_time'] = activeStartTime;
        return this;
    }
    public set activeStartTime(activeStartTime: string  | undefined) {
        this['active_start_time'] = activeStartTime;
    }
    public get activeStartTime(): string | undefined {
        return this['active_start_time'];
    }
    public withActiveEndTime(activeEndTime: string): JobScheduleDailyFrequencyInfo {
        this['active_end_time'] = activeEndTime;
        return this;
    }
    public set activeEndTime(activeEndTime: string  | undefined) {
        this['active_end_time'] = activeEndTime;
    }
    public get activeEndTime(): string | undefined {
        return this['active_end_time'];
    }
    public withFreqSubdayInterval(freqSubdayInterval: number): JobScheduleDailyFrequencyInfo {
        this['freq_subday_interval'] = freqSubdayInterval;
        return this;
    }
    public set freqSubdayInterval(freqSubdayInterval: number  | undefined) {
        this['freq_subday_interval'] = freqSubdayInterval;
    }
    public get freqSubdayInterval(): number | undefined {
        return this['freq_subday_interval'];
    }
    public withFreqIntervalUnit(freqIntervalUnit: string): JobScheduleDailyFrequencyInfo {
        this['freq_interval_unit'] = freqIntervalUnit;
        return this;
    }
    public set freqIntervalUnit(freqIntervalUnit: string  | undefined) {
        this['freq_interval_unit'] = freqIntervalUnit;
    }
    public get freqIntervalUnit(): string | undefined {
        return this['freq_interval_unit'];
    }
}