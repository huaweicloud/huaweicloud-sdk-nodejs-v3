

export class Volume {
    public type?: VolumeTypeEnum | string;
    public size?: number;
    public constructor(type?: string, size?: number) { 
        this['type'] = type;
        this['size'] = size;
    }
    public withType(type: VolumeTypeEnum | string): Volume {
        this['type'] = type;
        return this;
    }
    public withSize(size: number): Volume {
        this['size'] = size;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VolumeTypeEnum {
    ULTRAHIGH = 'ULTRAHIGH',
    HIGH = 'HIGH',
    COMMON = 'COMMON',
    NVMESSD = 'NVMESSD',
    ULTRAHIGHPRO = 'ULTRAHIGHPRO',
    CLOUDSSD = 'CLOUDSSD',
    LOCALSSD = 'LOCALSSD',
    ESSD = 'ESSD'
}
