

export class ShowUnblockRecordRequest {
    private 'domain_id'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public constructor(domainId?: string, startTime?: number, endTime?: number) { 
        this['domain_id'] = domainId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withDomainId(domainId: string): ShowUnblockRecordRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withStartTime(startTime: number): ShowUnblockRecordRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowUnblockRecordRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
}