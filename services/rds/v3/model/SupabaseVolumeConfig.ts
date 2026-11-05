

export class SupabaseVolumeConfig {
    public type?: SupabaseVolumeConfigTypeEnum | string;
    public size?: number;
    public constructor() { 
    }
    public withType(type: SupabaseVolumeConfigTypeEnum | string): SupabaseVolumeConfig {
        this['type'] = type;
        return this;
    }
    public withSize(size: number): SupabaseVolumeConfig {
        this['size'] = size;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SupabaseVolumeConfigTypeEnum {
    CLOUDSSD = 'CLOUDSSD'
}
