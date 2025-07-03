

export class ShowOrderStatusReq {
    private 'domain_id'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(domainId?: string, startTime?: string, endTime?: string) { 
        this['domain_id'] = domainId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withDomainId(domainId: string): ShowOrderStatusReq {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withStartTime(startTime: string): ShowOrderStatusReq {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowOrderStatusReq {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}