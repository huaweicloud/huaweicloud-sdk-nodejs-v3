

export class Timezones {
    private 'time_zone_desc'?: string;
    private 'time_zone'?: string;
    private 'time_zone_name'?: string;
    private 'time_zone_desc_us'?: string;
    private 'time_zone_desc_cn'?: string;
    public constructor() { 
    }
    public withTimeZoneDesc(timeZoneDesc: string): Timezones {
        this['time_zone_desc'] = timeZoneDesc;
        return this;
    }
    public set timeZoneDesc(timeZoneDesc: string  | undefined) {
        this['time_zone_desc'] = timeZoneDesc;
    }
    public get timeZoneDesc(): string | undefined {
        return this['time_zone_desc'];
    }
    public withTimeZone(timeZone: string): Timezones {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
    public withTimeZoneName(timeZoneName: string): Timezones {
        this['time_zone_name'] = timeZoneName;
        return this;
    }
    public set timeZoneName(timeZoneName: string  | undefined) {
        this['time_zone_name'] = timeZoneName;
    }
    public get timeZoneName(): string | undefined {
        return this['time_zone_name'];
    }
    public withTimeZoneDescUs(timeZoneDescUs: string): Timezones {
        this['time_zone_desc_us'] = timeZoneDescUs;
        return this;
    }
    public set timeZoneDescUs(timeZoneDescUs: string  | undefined) {
        this['time_zone_desc_us'] = timeZoneDescUs;
    }
    public get timeZoneDescUs(): string | undefined {
        return this['time_zone_desc_us'];
    }
    public withTimeZoneDescCn(timeZoneDescCn: string): Timezones {
        this['time_zone_desc_cn'] = timeZoneDescCn;
        return this;
    }
    public set timeZoneDescCn(timeZoneDescCn: string  | undefined) {
        this['time_zone_desc_cn'] = timeZoneDescCn;
    }
    public get timeZoneDescCn(): string | undefined {
        return this['time_zone_desc_cn'];
    }
}