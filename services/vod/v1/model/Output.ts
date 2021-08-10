import { MetaData } from './MetaData';


export class Output {
    private 'play_type': OutputPlayTypeEnum | undefined;
    public url: string;
    public encrypted?: number;
    public quality?: OutputQualityEnum;
    private 'meta_data': MetaData | undefined;
    public constructor(playType?: any, url?: any, metaData?: any) { 
        this['play_type'] = playType;
        this['url'] = url;
        this['meta_data'] = metaData;
    }
    public withPlayType(playType: OutputPlayTypeEnum): Output {
        this['play_type'] = playType;
        return this;
    }
    public set playType(playType: OutputPlayTypeEnum | undefined) {
        this['play_type'] = playType;
    }
    public get playType() {
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
    public withQuality(quality: OutputQualityEnum): Output {
        this['quality'] = quality;
        return this;
    }
    public withMetaData(metaData: MetaData): Output {
        this['meta_data'] = metaData;
        return this;
    }
    public set metaData(metaData: MetaData | undefined) {
        this['meta_data'] = metaData;
    }
    public get metaData() {
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
