

export class TrainingAllocatedResource {
    private 'resource_id'?: string;
    private 'charge_mode'?: TrainingAllocatedResourceChargeModeEnum | string;
    private 'expire_time'?: string;
    public constructor() { 
    }
    public withResourceId(resourceId: string): TrainingAllocatedResource {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withChargeMode(chargeMode: TrainingAllocatedResourceChargeModeEnum | string): TrainingAllocatedResource {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: TrainingAllocatedResourceChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): TrainingAllocatedResourceChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
    public withExpireTime(expireTime: string): TrainingAllocatedResource {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: string  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): string | undefined {
        return this['expire_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TrainingAllocatedResourceChargeModeEnum {
    PERIODIC = 'PERIODIC',
    ONE_TIME = 'ONE_TIME',
    ON_DEMAND = 'ON_DEMAND'
}
