

export class MysqlCreateReadonlyNodeRequest {
    public priorities?: Array<number>;
    private 'is_auto_pay'?: string;
    private 'charge_mode'?: MysqlCreateReadonlyNodeRequestChargeModeEnum | string;
    private 'availability_zones'?: Array<string>;
    public constructor(priorities?: Array<number>) { 
        this['priorities'] = priorities;
    }
    public withPriorities(priorities: Array<number>): MysqlCreateReadonlyNodeRequest {
        this['priorities'] = priorities;
        return this;
    }
    public withIsAutoPay(isAutoPay: string): MysqlCreateReadonlyNodeRequest {
        this['is_auto_pay'] = isAutoPay;
        return this;
    }
    public set isAutoPay(isAutoPay: string  | undefined) {
        this['is_auto_pay'] = isAutoPay;
    }
    public get isAutoPay(): string | undefined {
        return this['is_auto_pay'];
    }
    public withChargeMode(chargeMode: MysqlCreateReadonlyNodeRequestChargeModeEnum | string): MysqlCreateReadonlyNodeRequest {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: MysqlCreateReadonlyNodeRequestChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): MysqlCreateReadonlyNodeRequestChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
    public withAvailabilityZones(availabilityZones: Array<string>): MysqlCreateReadonlyNodeRequest {
        this['availability_zones'] = availabilityZones;
        return this;
    }
    public set availabilityZones(availabilityZones: Array<string>  | undefined) {
        this['availability_zones'] = availabilityZones;
    }
    public get availabilityZones(): Array<string> | undefined {
        return this['availability_zones'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MysqlCreateReadonlyNodeRequestChargeModeEnum {
    PREPAID = 'prePaid',
    POSTPAID = 'postPaid'
}
