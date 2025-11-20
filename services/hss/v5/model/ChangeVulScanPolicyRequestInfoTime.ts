

export class ChangeVulScanPolicyRequestInfoTime {
    private 'day_part'?: Array<number>;
    private 'hour_part'?: number;
    private 'minute_part'?: number;
    private 'next_scan_time'?: number;
    private 'timezone_offset'?: number;
    public constructor() { 
    }
    public withDayPart(dayPart: Array<number>): ChangeVulScanPolicyRequestInfoTime {
        this['day_part'] = dayPart;
        return this;
    }
    public set dayPart(dayPart: Array<number>  | undefined) {
        this['day_part'] = dayPart;
    }
    public get dayPart(): Array<number> | undefined {
        return this['day_part'];
    }
    public withHourPart(hourPart: number): ChangeVulScanPolicyRequestInfoTime {
        this['hour_part'] = hourPart;
        return this;
    }
    public set hourPart(hourPart: number  | undefined) {
        this['hour_part'] = hourPart;
    }
    public get hourPart(): number | undefined {
        return this['hour_part'];
    }
    public withMinutePart(minutePart: number): ChangeVulScanPolicyRequestInfoTime {
        this['minute_part'] = minutePart;
        return this;
    }
    public set minutePart(minutePart: number  | undefined) {
        this['minute_part'] = minutePart;
    }
    public get minutePart(): number | undefined {
        return this['minute_part'];
    }
    public withNextScanTime(nextScanTime: number): ChangeVulScanPolicyRequestInfoTime {
        this['next_scan_time'] = nextScanTime;
        return this;
    }
    public set nextScanTime(nextScanTime: number  | undefined) {
        this['next_scan_time'] = nextScanTime;
    }
    public get nextScanTime(): number | undefined {
        return this['next_scan_time'];
    }
    public withTimezoneOffset(timezoneOffset: number): ChangeVulScanPolicyRequestInfoTime {
        this['timezone_offset'] = timezoneOffset;
        return this;
    }
    public set timezoneOffset(timezoneOffset: number  | undefined) {
        this['timezone_offset'] = timezoneOffset;
    }
    public get timezoneOffset(): number | undefined {
        return this['timezone_offset'];
    }
}