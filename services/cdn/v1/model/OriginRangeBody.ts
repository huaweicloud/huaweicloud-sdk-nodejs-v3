

export class OriginRangeBody {
    private 'range_status'?: OriginRangeBodyRangeStatusEnum | undefined;
    private 'domain_id'?: string | undefined;
    public constructor() { 
    }
    public withRangeStatus(rangeStatus: OriginRangeBodyRangeStatusEnum): OriginRangeBody {
        this['range_status'] = rangeStatus;
        return this;
    }
    public set rangeStatus(rangeStatus: OriginRangeBodyRangeStatusEnum | undefined) {
        this['range_status'] = rangeStatus;
    }
    public get rangeStatus() {
        return this['range_status'];
    }
    public withDomainId(domainId: string): OriginRangeBody {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
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
