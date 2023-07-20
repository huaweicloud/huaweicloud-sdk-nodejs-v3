

export class OriginRangeBody {
    private 'range_status'?: OriginRangeBodyRangeStatusEnum | string;
    private 'domain_id'?: string;
    public constructor() { 
    }
    public withRangeStatus(rangeStatus: OriginRangeBodyRangeStatusEnum | string): OriginRangeBody {
        this['range_status'] = rangeStatus;
        return this;
    }
    public set rangeStatus(rangeStatus: OriginRangeBodyRangeStatusEnum | string  | undefined) {
        this['range_status'] = rangeStatus;
    }
    public get rangeStatus(): OriginRangeBodyRangeStatusEnum | string | undefined {
        return this['range_status'];
    }
    public withDomainId(domainId: string): OriginRangeBody {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OriginRangeBodyRangeStatusEnum {
    OFF = 'off',
    ON = 'on'
}
