import { MetaData } from './MetaData';


export class Output {
    private 'play_type'?: OutputPlayTypeEnum | string;
    public url?: string;
    public encrypted?: number;
    public quality?: OutputQualityEnum | string;
    private 'meta_data'?: MetaData;
    public constructor(playType?: string, url?: string, metaData?: MetaData) { 
        this['play_type'] = playType;
        this['url'] = url;
        this['meta_data'] = metaData;
    }
    public withPlayType(playType: OutputPlayTypeEnum | string): Output {
        this['play_type'] = playType;
        return this;
    }
    public set playType(playType: OutputPlayTypeEnum | string  | undefined) {
        this['play_type'] = playType;
    }
    public get playType(): OutputPlayTypeEnum | string | undefined {
        return this['play_type'];
    }
    public withUrl(url: string): Output {
        this['url'] = url;
        return this;
    }
    public withEncrypted(encrypted: number): Output {
        this['encrypted'] = encrypted;
        return this;
    }
    public withQuality(quality: OutputQualityEnum | string): Output {
        this['quality'] = quality;
        return this;
    }
    public withMetaData(metaData: MetaData): Output {
        this['meta_data'] = metaData;
        return this;
    }
    public set metaData(metaData: MetaData  | undefined) {
        this['meta_data'] = metaData;
    }
    public get metaData(): MetaData | undefined {
        return this['meta_data'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OutputPlayTypeEnum {
    HLS = 'HLS',
    DASH = 'DASH',
    MP4 = 'MP4',
    MP3 = 'MP3',
    AAC = 'AAC'
}
/**
    * @export
    * @enum {string}
    */
export enum OutputQualityEnum {
    FLUENT = 'FLUENT',
    SD = 'SD',
    HD = 'HD',
    FULL_HD = 'FULL_HD'
}
