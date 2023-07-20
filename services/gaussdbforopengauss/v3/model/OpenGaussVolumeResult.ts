

export class OpenGaussVolumeResult {
    public type?: OpenGaussVolumeResultTypeEnum | string;
    public size?: number;
    public constructor(type?: string, size?: number) { 
        this['type'] = type;
        this['size'] = size;
    }
    public withType(type: OpenGaussVolumeResultTypeEnum | string): OpenGaussVolumeResult {
        this['type'] = type;
        return this;
    }
    public withSize(size: number): OpenGaussVolumeResult {
        this['size'] = size;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OpenGaussVolumeResultTypeEnum {
    ULTRAHIGH = 'ULTRAHIGH',
    ESSD = 'ESSD'
}
