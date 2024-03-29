

export class BatchSwitchesRequest {
    public ids?: string;
    public status?: BatchSwitchesRequestStatusEnum | string;
    public constructor() { 
    }
    public withIds(ids: string): BatchSwitchesRequest {
        this['ids'] = ids;
        return this;
    }
    public withStatus(status: BatchSwitchesRequestStatusEnum | string): BatchSwitchesRequest {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchSwitchesRequestStatusEnum {
    OFF = 'OFF',
    ON = 'ON'
}
