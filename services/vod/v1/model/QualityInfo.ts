import { AudioTemplateInfo } from './AudioTemplateInfo';
import { VideoTemplateInfo } from './VideoTemplateInfo';


export class QualityInfo {
    public video?: VideoTemplateInfo;
    public audio?: AudioTemplateInfo;
    public format?: QualityInfoFormatEnum | string;
    public constructor(format?: string) { 
        this['format'] = format;
    }
    public withVideo(video: VideoTemplateInfo): QualityInfo {
        this['video'] = video;
        return this;
    }
    public withAudio(audio: AudioTemplateInfo): QualityInfo {
        this['audio'] = audio;
        return this;
    }
    public withFormat(format: QualityInfoFormatEnum | string): QualityInfo {
        this['format'] = format;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum QualityInfoFormatEnum {
    MP4 = 'MP4',
    HLS = 'HLS',
    DASH = 'DASH',
    DASH_HLS = 'DASH_HLS',
    MP3 = 'MP3',
    ADTS = 'ADTS',
    UNKNOW = 'UNKNOW'
}
