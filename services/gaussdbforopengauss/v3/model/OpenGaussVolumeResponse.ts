

export class OpenGaussVolumeResponse {
    public type?: OpenGaussVolumeResponseTypeEnum | string;
    public size?: number;
    public constructor(type?: string, size?: number) { 
        this['type'] = type;
        this['size'] = size;
    }
    public withType(type: OpenGaussVolumeResponseTypeEnum | string): OpenGaussVolumeResponse {
        this['type'] = type;
        return this;
    }
    public withSize(size: number): OpenGaussVolumeResponse {
        this['size'] = size;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OpenGaussVolumeResponseTypeEnum {
    ULTRAHIGH = 'ULTRAHIGH',
    ESSD = 'ESSD'
}
