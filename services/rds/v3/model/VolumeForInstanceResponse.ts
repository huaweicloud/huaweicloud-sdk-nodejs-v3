

export class VolumeForInstanceResponse {
    public type?: VolumeForInstanceResponseTypeEnum | string;
    public size?: number;
    public constructor(type?: string, size?: number) { 
        this['type'] = type;
        this['size'] = size;
    }
    public withType(type: VolumeForInstanceResponseTypeEnum | string): VolumeForInstanceResponse {
        this['type'] = type;
        return this;
    }
    public withSize(size: number): VolumeForInstanceResponse {
        this['size'] = size;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VolumeForInstanceResponseTypeEnum {
    ULTRAHIGH = 'ULTRAHIGH',
    HIGH = 'HIGH',
    COMMON = 'COMMON',
    NVMESSD = 'NVMESSD',
    ULTRAHIGHPRO = 'ULTRAHIGHPRO',
    CLOUDSSD = 'CLOUDSSD',
    LOCALSSD = 'LOCALSSD',
    ESSD = 'ESSD'
}
