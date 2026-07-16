

export class ServerVolume {
    public size?: number;
    public type?: ServerVolumeTypeEnum | string;
    private 'evs_type'?: ServerVolumeEvsTypeEnum | string;
    private 'evs_id'?: string;
    public constructor() { 
    }
    public withSize(size: number): ServerVolume {
        this['size'] = size;
        return this;
    }
    public withType(type: ServerVolumeTypeEnum | string): ServerVolume {
        this['type'] = type;
        return this;
    }
    public withEvsType(evsType: ServerVolumeEvsTypeEnum | string): ServerVolume {
        this['evs_type'] = evsType;
        return this;
    }
    public set evsType(evsType: ServerVolumeEvsTypeEnum | string  | undefined) {
        this['evs_type'] = evsType;
    }
    public get evsType(): ServerVolumeEvsTypeEnum | string | undefined {
        return this['evs_type'];
    }
    public withEvsId(evsId: string): ServerVolume {
        this['evs_id'] = evsId;
        return this;
    }
    public set evsId(evsId: string  | undefined) {
        this['evs_id'] = evsId;
    }
    public get evsId(): string | undefined {
        return this['evs_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ServerVolumeTypeEnum {
    ROOT = 'ROOT',
    DATA = 'DATA'
}
/**
    * @export
    * @enum {string}
    */
export enum ServerVolumeEvsTypeEnum {
    ESSD = 'ESSD',
    GPSSD = 'GPSSD',
    SAS = 'SAS',
    SATA = 'SATA',
    SSD = 'SSD'
}
