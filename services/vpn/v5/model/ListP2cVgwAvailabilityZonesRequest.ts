

export class ListP2cVgwAvailabilityZonesRequest {
    public flavor?: ListP2cVgwAvailabilityZonesRequestFlavorEnum | string;
    public constructor() { 
    }
    public withFlavor(flavor: ListP2cVgwAvailabilityZonesRequestFlavorEnum | string): ListP2cVgwAvailabilityZonesRequest {
        this['flavor'] = flavor;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListP2cVgwAvailabilityZonesRequestFlavorEnum {
    PROFESSIONAL1 = 'Professional1'
}
