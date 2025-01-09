

export class ListTimeZonesRequest {
    private 'time_zone_name'?: string;
    public constructor() { 
    }
    public withTimeZoneName(timeZoneName: string): ListTimeZonesRequest {
        this['time_zone_name'] = timeZoneName;
        return this;
    }
    public set timeZoneName(timeZoneName: string  | undefined) {
        this['time_zone_name'] = timeZoneName;
    }
    public get timeZoneName(): string | undefined {
        return this['time_zone_name'];
    }
}