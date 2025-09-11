

export class TimezoneRequest {
    public timezone?: string;
    public constructor(timezone?: string) { 
        this['timezone'] = timezone;
    }
    public withTimezone(timezone: string): TimezoneRequest {
        this['timezone'] = timezone;
        return this;
    }
}