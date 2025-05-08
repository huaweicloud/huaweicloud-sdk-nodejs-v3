

export class EditingSetting {
    private 'resolution_adaptation'?: EditingSettingResolutionAdaptationEnum | string;
    private 'resolution_upsample'?: EditingSettingResolutionUpsampleEnum | string;
    public format?: EditingSettingFormatEnum | string;
    public width?: number;
    public height?: number;
    public reference?: EditingSettingReferenceEnum | string;
    private 'video_codec'?: number;
    public constructor() { 
    }
    public withResolutionAdaptation(resolutionAdaptation: EditingSettingResolutionAdaptationEnum | string): EditingSetting {
        this['resolution_adaptation'] = resolutionAdaptation;
        return this;
    }
    public set resolutionAdaptation(resolutionAdaptation: EditingSettingResolutionAdaptationEnum | string  | undefined) {
        this['resolution_adaptation'] = resolutionAdaptation;
    }
    public get resolutionAdaptation(): EditingSettingResolutionAdaptationEnum | string | undefined {
        return this['resolution_adaptation'];
    }
    public withResolutionUpsample(resolutionUpsample: EditingSettingResolutionUpsampleEnum | string): EditingSetting {
        this['resolution_upsample'] = resolutionUpsample;
        return this;
    }
    public set resolutionUpsample(resolutionUpsample: EditingSettingResolutionUpsampleEnum | string  | undefined) {
        this['resolution_upsample'] = resolutionUpsample;
    }
    public get resolutionUpsample(): EditingSettingResolutionUpsampleEnum | string | undefined {
        return this['resolution_upsample'];
    }
    public withFormat(format: EditingSettingFormatEnum | string): EditingSetting {
        this['format'] = format;
        return this;
    }
    public withWidth(width: number): EditingSetting {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): EditingSetting {
        this['height'] = height;
        return this;
    }
    public withReference(reference: EditingSettingReferenceEnum | string): EditingSetting {
        this['reference'] = reference;
        return this;
    }
    public withVideoCodec(videoCodec: number): EditingSetting {
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
export enum EditingSettingResolutionAdaptationEnum {
    OPEN = 'OPEN',
    CLOSE = 'CLOSE'
}
/**
    * @export
    * @enum {string}
    */
export enum EditingSettingResolutionUpsampleEnum {
    ON = 'ON',
    OFF = 'OFF'
}
/**
    * @export
    * @enum {string}
    */
export enum EditingSettingFormatEnum {
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
export enum EditingSettingReferenceEnum {
    NONE = 'NONE',
    MAX_BITRATE = 'MAX_BITRATE',
    MAX_RESOLUTION = 'MAX_RESOLUTION'
}
