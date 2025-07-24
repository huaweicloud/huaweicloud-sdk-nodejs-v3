

export class ShareTypeAvailableZone {
    private 'available_zone'?: string;
    public status?: ShareTypeAvailableZoneStatusEnum | string;
    public constructor() { 
    }
    public withAvailableZone(availableZone: string): ShareTypeAvailableZone {
        this['available_zone'] = availableZone;
        return this;
    }
    public set availableZone(availableZone: string  | undefined) {
        this['available_zone'] = availableZone;
    }
    public get availableZone(): string | undefined {
        return this['available_zone'];
    }
    public withStatus(status: ShareTypeAvailableZoneStatusEnum | string): ShareTypeAvailableZone {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShareTypeAvailableZoneStatusEnum {
    NORMAL = 'normal',
    SELLOUT = 'sellout'
}
