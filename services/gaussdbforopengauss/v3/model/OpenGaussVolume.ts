

export class OpenGaussVolume {
    public type?: OpenGaussVolumeTypeEnum | string;
    public size?: number;
    public constructor(type?: string, size?: number) { 
        this['type'] = type;
        this['size'] = size;
    }
    public withType(type: OpenGaussVolumeTypeEnum | string): OpenGaussVolume {
        this['type'] = type;
        return this;
    }
    public withSize(size: number): OpenGaussVolume {
        this['size'] = size;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OpenGaussVolumeTypeEnum {
    ULTRAHIGH = 'ULTRAHIGH',
    ESSD = 'ESSD'
}
