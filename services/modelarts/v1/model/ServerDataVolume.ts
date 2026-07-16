

export class ServerDataVolume {
    public size?: number;
    public type?: ServerDataVolumeTypeEnum | string;
    public count?: number;
    public constructor(size?: number, type?: string, count?: number) { 
        this['size'] = size;
        this['type'] = type;
        this['count'] = count;
    }
    public withSize(size: number): ServerDataVolume {
        this['size'] = size;
        return this;
    }
    public withType(type: ServerDataVolumeTypeEnum | string): ServerDataVolume {
        this['type'] = type;
        return this;
    }
    public withCount(count: number): ServerDataVolume {
        this['count'] = count;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ServerDataVolumeTypeEnum {
    SSD = 'SSD',
    SAS = 'SAS',
    SATA = 'SATA',
    GPSSD = 'GPSSD',
    ESSD = 'ESSD'
}
