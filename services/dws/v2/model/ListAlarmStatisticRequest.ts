

export class ListAlarmStatisticRequest {
    private 'time_zone': string | undefined;
    public constructor(timeZone?: any) { 
        this['time_zone'] = timeZone;
    }
    public withTimeZone(timeZone: string): ListAlarmStatisticRequest {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone() {
        return this['time_zone'];
    }
}