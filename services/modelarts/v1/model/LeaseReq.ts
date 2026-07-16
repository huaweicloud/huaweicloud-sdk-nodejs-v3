

export class LeaseReq {
    public duration?: number;
    public type?: LeaseReqTypeEnum | string;
    public constructor() { 
    }
    public withDuration(duration: number): LeaseReq {
        this['duration'] = duration;
        return this;
    }
    public withType(type: LeaseReqTypeEnum | string): LeaseReq {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LeaseReqTypeEnum {
    TIMING = 'timing',
    IDLE = 'idle'
}
