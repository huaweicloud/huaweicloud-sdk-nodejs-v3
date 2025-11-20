

export class ListWafQpsRequest {
    public domains?: string;
    private 'value_type'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public recent?: string;
    private 'overseas_type'?: number;
    public limit?: number;
    public offset?: number;
    public constructor(valueType?: string) { 
        this['value_type'] = valueType;
    }
    public withDomains(domains: string): ListWafQpsRequest {
        this['domains'] = domains;
        return this;
    }
    public withValueType(valueType: string): ListWafQpsRequest {
        this['value_type'] = valueType;
        return this;
    }
    public set valueType(valueType: string  | undefined) {
        this['value_type'] = valueType;
    }
    public get valueType(): string | undefined {
        return this['value_type'];
    }
    public withStartTime(startTime: string): ListWafQpsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListWafQpsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withRecent(recent: string): ListWafQpsRequest {
        this['recent'] = recent;
        return this;
    }
    public withOverseasType(overseasType: number): ListWafQpsRequest {
        this['overseas_type'] = overseasType;
        return this;
    }
    public set overseasType(overseasType: number  | undefined) {
        this['overseas_type'] = overseasType;
    }
    public get overseasType(): number | undefined {
        return this['overseas_type'];
    }
    public withLimit(limit: number): ListWafQpsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListWafQpsRequest {
        this['offset'] = offset;
        return this;
    }
}