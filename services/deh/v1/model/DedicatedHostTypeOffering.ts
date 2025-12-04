

export class DedicatedHostTypeOffering {
    private 'availability_zone'?: string;
    public status?: DedicatedHostTypeOfferingStatusEnum | string;
    public constructor() { 
    }
    public withAvailabilityZone(availabilityZone: string): DedicatedHostTypeOffering {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withStatus(status: DedicatedHostTypeOfferingStatusEnum | string): DedicatedHostTypeOffering {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DedicatedHostTypeOfferingStatusEnum {
    AVAILABLE = 'available',
    SELLOUT = 'sellout',
    ABANDON = 'abandon'
}
