

export class RangeStatusRequest {
    private 'range_status'?: RangeStatusRequestRangeStatusEnum | string;
    public constructor(rangeStatus?: string) { 
        this['range_status'] = rangeStatus;
    }
    public withRangeStatus(rangeStatus: RangeStatusRequestRangeStatusEnum | string): RangeStatusRequest {
        this['range_status'] = rangeStatus;
        return this;
    }
    public set rangeStatus(rangeStatus: RangeStatusRequestRangeStatusEnum | string  | undefined) {
        this['range_status'] = rangeStatus;
    }
    public get rangeStatus(): RangeStatusRequestRangeStatusEnum | string | undefined {
        return this['range_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RangeStatusRequestRangeStatusEnum {
    OFF = 'off',
    ON = 'on'
}
