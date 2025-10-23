

export class RestartPolicy {
    public period?: Array<string>;
    private 'utc_offset'?: string;
    public constructor() { 
    }
    public withPeriod(period: Array<string>): RestartPolicy {
        this['period'] = period;
        return this;
    }
    public withUtcOffset(utcOffset: string): RestartPolicy {
        this['utc_offset'] = utcOffset;
        return this;
    }
    public set utcOffset(utcOffset: string  | undefined) {
        this['utc_offset'] = utcOffset;
    }
    public get utcOffset(): string | undefined {
        return this['utc_offset'];
    }
}