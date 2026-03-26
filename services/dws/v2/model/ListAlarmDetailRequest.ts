

export class ListAlarmDetailRequest {
    private 'time_zone'?: string;
    public offset?: string;
    public limit?: string;
    public from?: number;
    public to?: number;
    private 'recent_day'?: number;
    public constructor() { 
    }
    public withTimeZone(timeZone: string): ListAlarmDetailRequest {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withOffset(offset: string): ListAlarmDetailRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListAlarmDetailRequest {
        this['limit'] = limit;
        return this;
    }
    public withFrom(from: number): ListAlarmDetailRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ListAlarmDetailRequest {
        this['to'] = to;
        return this;
    }
    public withRecentDay(recentDay: number): ListAlarmDetailRequest {
        this['recent_day'] = recentDay;
        return this;
    }
    public set recentDay(recentDay: number  | undefined) {
        this['recent_day'] = recentDay;
    }
    public get recentDay(): number | undefined {
        return this['recent_day'];
    }
}