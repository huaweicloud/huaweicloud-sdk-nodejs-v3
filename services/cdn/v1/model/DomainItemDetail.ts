

export class DomainItemDetail {
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'stat_type'?: string;
    public domains?: Array<{ [key: string]: object; }>;
    public constructor() { 
    }
    public withStartTime(startTime: number): DomainItemDetail {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): DomainItemDetail {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withStatType(statType: string): DomainItemDetail {
        this['stat_type'] = statType;
        return this;
    }
    public set statType(statType: string  | undefined) {
        this['stat_type'] = statType;
    }
    public get statType(): string | undefined {
        return this['stat_type'];
    }
    public withDomains(domains: Array<{ [key: string]: object; }>): DomainItemDetail {
        this['domains'] = domains;
        return this;
    }
}