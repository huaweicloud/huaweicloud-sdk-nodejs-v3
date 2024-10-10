

export class ListWafAttackEventRequest {
    public domains?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public recent?: string;
    private 'overseas_type'?: number;
    public sip?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withDomains(domains: string): ListWafAttackEventRequest {
        this['domains'] = domains;
        return this;
    }
    public withStartTime(startTime: string): ListWafAttackEventRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListWafAttackEventRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withRecent(recent: string): ListWafAttackEventRequest {
        this['recent'] = recent;
        return this;
    }
    public withOverseasType(overseasType: number): ListWafAttackEventRequest {
        this['overseas_type'] = overseasType;
        return this;
    }
    public set overseasType(overseasType: number  | undefined) {
        this['overseas_type'] = overseasType;
    }
    public get overseasType(): number | undefined {
        return this['overseas_type'];
    }
    public withSip(sip: string): ListWafAttackEventRequest {
        this['sip'] = sip;
        return this;
    }
    public withLimit(limit: number): ListWafAttackEventRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListWafAttackEventRequest {
        this['offset'] = offset;
        return this;
    }
}