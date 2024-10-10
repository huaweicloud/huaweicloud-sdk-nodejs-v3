

export class ListWafBandwidthRequest {
    public domains?: string;
    private 'value_type'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public recent?: string;
    private 'overseas_type'?: number;
    public constructor(valueType?: string) { 
        this['value_type'] = valueType;
    }
    public withDomains(domains: string): ListWafBandwidthRequest {
        this['domains'] = domains;
        return this;
    }
    public withValueType(valueType: string): ListWafBandwidthRequest {
        this['value_type'] = valueType;
        return this;
    }
    public set valueType(valueType: string  | undefined) {
        this['value_type'] = valueType;
    }
    public get valueType(): string | undefined {
        return this['value_type'];
    }
    public withStartTime(startTime: string): ListWafBandwidthRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListWafBandwidthRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withRecent(recent: string): ListWafBandwidthRequest {
        this['recent'] = recent;
        return this;
    }
    public withOverseasType(overseasType: number): ListWafBandwidthRequest {
        this['overseas_type'] = overseasType;
        return this;
    }
    public set overseasType(overseasType: number  | undefined) {
        this['overseas_type'] = overseasType;
    }
    public get overseasType(): number | undefined {
        return this['overseas_type'];
    }
}