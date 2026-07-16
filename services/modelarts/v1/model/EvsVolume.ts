

export class EvsVolume {
    public size?: number;
    public type?: EvsVolumeTypeEnum | string;
    public constructor() { 
    }
    public withSize(size: number): EvsVolume {
        this['size'] = size;
        return this;
    }
    public withType(type: EvsVolumeTypeEnum | string): EvsVolume {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EvsVolumeTypeEnum {
    ESSD = 'ESSD',
    GPSSD = 'GPSSD',
    SAS = 'SAS',
    SATA = 'SATA',
    SSD = 'SSD'
}
