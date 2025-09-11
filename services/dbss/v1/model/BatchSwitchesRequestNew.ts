

export class BatchSwitchesRequestNew {
    public ids?: Array<string>;
    public status?: BatchSwitchesRequestNewStatusEnum | string;
    public constructor(ids?: Array<string>, status?: string) { 
        this['ids'] = ids;
        this['status'] = status;
    }
    public withIds(ids: Array<string>): BatchSwitchesRequestNew {
        this['ids'] = ids;
        return this;
    }
    public withStatus(status: BatchSwitchesRequestNewStatusEnum | string): BatchSwitchesRequestNew {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchSwitchesRequestNewStatusEnum {
    OFF = 'OFF',
    ON = 'ON'
}
