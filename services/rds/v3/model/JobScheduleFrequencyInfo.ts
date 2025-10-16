

export class JobScheduleFrequencyInfo {
    private 'freq_type'?: string;
    private 'freq_interval'?: number;
    private 'freq_interval_weekly'?: Array<string>;
    private 'freq_interval_day_monthly'?: number;
    private 'freq_interval_monthly'?: string;
    private 'freq_relative_interval_monthly'?: string;
    public constructor() { 
    }
    public withFreqType(freqType: string): JobScheduleFrequencyInfo {
        this['freq_type'] = freqType;
        return this;
    }
    public set freqType(freqType: string  | undefined) {
        this['freq_type'] = freqType;
    }
    public get freqType(): string | undefined {
        return this['freq_type'];
    }
    public withFreqInterval(freqInterval: number): JobScheduleFrequencyInfo {
        this['freq_interval'] = freqInterval;
        return this;
    }
    public set freqInterval(freqInterval: number  | undefined) {
        this['freq_interval'] = freqInterval;
    }
    public get freqInterval(): number | undefined {
        return this['freq_interval'];
    }
    public withFreqIntervalWeekly(freqIntervalWeekly: Array<string>): JobScheduleFrequencyInfo {
        this['freq_interval_weekly'] = freqIntervalWeekly;
        return this;
    }
    public set freqIntervalWeekly(freqIntervalWeekly: Array<string>  | undefined) {
        this['freq_interval_weekly'] = freqIntervalWeekly;
    }
    public get freqIntervalWeekly(): Array<string> | undefined {
        return this['freq_interval_weekly'];
    }
    public withFreqIntervalDayMonthly(freqIntervalDayMonthly: number): JobScheduleFrequencyInfo {
        this['freq_interval_day_monthly'] = freqIntervalDayMonthly;
        return this;
    }
    public set freqIntervalDayMonthly(freqIntervalDayMonthly: number  | undefined) {
        this['freq_interval_day_monthly'] = freqIntervalDayMonthly;
    }
    public get freqIntervalDayMonthly(): number | undefined {
        return this['freq_interval_day_monthly'];
    }
    public withFreqIntervalMonthly(freqIntervalMonthly: string): JobScheduleFrequencyInfo {
        this['freq_interval_monthly'] = freqIntervalMonthly;
        return this;
    }
    public set freqIntervalMonthly(freqIntervalMonthly: string  | undefined) {
        this['freq_interval_monthly'] = freqIntervalMonthly;
    }
    public get freqIntervalMonthly(): string | undefined {
        return this['freq_interval_monthly'];
    }
    public withFreqRelativeIntervalMonthly(freqRelativeIntervalMonthly: string): JobScheduleFrequencyInfo {
        this['freq_relative_interval_monthly'] = freqRelativeIntervalMonthly;
        return this;
    }
    public set freqRelativeIntervalMonthly(freqRelativeIntervalMonthly: string  | undefined) {
        this['freq_relative_interval_monthly'] = freqRelativeIntervalMonthly;
    }
    public get freqRelativeIntervalMonthly(): string | undefined {
        return this['freq_relative_interval_monthly'];
    }
}