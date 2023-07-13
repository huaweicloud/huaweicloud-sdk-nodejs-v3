

export class RangeStatusRequest {
    private 'range_status': RangeStatusRequestRangeStatusEnum | undefined;
    public constructor(rangeStatus?: any) { 
        this['range_status'] = rangeStatus;
    }
    public withRangeStatus(rangeStatus: RangeStatusRequestRangeStatusEnum): RangeStatusRequest {
        this['range_status'] = rangeStatus;
        return this;
    }
    public set rangeStatus(rangeStatus: RangeStatusRequestRangeStatusEnum | undefined) {
        this['range_status'] = rangeStatus;
    }
    public get rangeStatus() {
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
