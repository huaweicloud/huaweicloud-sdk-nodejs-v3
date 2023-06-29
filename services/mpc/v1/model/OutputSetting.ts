import { EditAudioInfo } from './EditAudioInfo';
import { EditHlsInfo } from './EditHlsInfo';
import { EditVideoInfo } from './EditVideoInfo';
import { ObsObjInfo } from './ObsObjInfo';


export class OutputSetting {
    public format?: OutputSettingFormatEnum;
    public video?: EditVideoInfo;
    public audio?: EditAudioInfo;
    public hls?: EditHlsInfo;
    public output?: ObsObjInfo;
    public constructor() { 
    }
    public withFormat(format: OutputSettingFormatEnum): OutputSetting {
        this['format'] = format;
        return this;
    }
    public withVideo(video: EditVideoInfo): OutputSetting {
        this['video'] = video;
        return this;
    }
    public withAudio(audio: EditAudioInfo): OutputSetting {
        this['audio'] = audio;
        return this;
    }
    public withHls(hls: EditHlsInfo): OutputSetting {
        this['hls'] = hls;
        return this;
    }
    public withOutput(output: ObsObjInfo): OutputSetting {
        this['output'] = output;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OutputSettingFormatEnum {
    MP4 = 'MP4',
    HLS = 'HLS',
    TS = 'TS',
    FLV = 'FLV'
}
