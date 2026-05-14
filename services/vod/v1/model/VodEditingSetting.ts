

export class VodEditingSetting {
    private 'resolution_adaptation'?: boolean;
    private 'resolution_upsample'?: boolean;
    public format?: VodEditingSettingFormatEnum | string;
    public width?: number;
    public height?: number;
    public reference?: VodEditingSettingReferenceEnum | string;
    private 'video_codec'?: number;
    public constructor() { 
    }
    public withResolutionAdaptation(resolutionAdaptation: boolean): VodEditingSetting {
        this['resolution_adaptation'] = resolutionAdaptation;
        return this;
    }
    public set resolutionAdaptation(resolutionAdaptation: boolean  | undefined) {
        this['resolution_adaptation'] = resolutionAdaptation;
    }
    public get resolutionAdaptation(): boolean | undefined {
        return this['resolution_adaptation'];
    }
    public withResolutionUpsample(resolutionUpsample: boolean): VodEditingSetting {
        this['resolution_upsample'] = resolutionUpsample;
        return this;
    }
    public set resolutionUpsample(resolutionUpsample: boolean  | undefined) {
        this['resolution_upsample'] = resolutionUpsample;
    }
    public get resolutionUpsample(): boolean | undefined {
        return this['resolution_upsample'];
    }
    public withFormat(format: VodEditingSettingFormatEnum | string): VodEditingSetting {
        this['format'] = format;
        return this;
    }
    public withWidth(width: number): VodEditingSetting {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): VodEditingSetting {
        this['height'] = height;
        return this;
    }
    public withReference(reference: VodEditingSettingReferenceEnum | string): VodEditingSetting {
        this['reference'] = reference;
        return this;
    }
    public withVideoCodec(videoCodec: number): VodEditingSetting {
        this['video_codec'] = videoCodec;
        return this;
    }
    public set videoCodec(videoCodec: number  | undefined) {
        this['video_codec'] = videoCodec;
    }
    public get videoCodec(): number | undefined {
        return this['video_codec'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VodEditingSettingFormatEnum {
    MP4 = 'MP4',
    HLS = 'HLS',
    MP3 = 'MP3',
    MOV = 'MOV',
    AVI = 'AVI',
    FLV = 'FLV'
}
/**
    * @export
    * @enum {string}
    */
export enum VodEditingSettingReferenceEnum {
    NONE = 'NONE',
    MAX_BITRATE = 'MAX_BITRATE',
    MAX_RESOLUTION = 'MAX_RESOLUTION'
}
