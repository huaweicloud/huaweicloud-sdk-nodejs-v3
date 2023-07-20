import { AudioInfo } from './AudioInfo';
import { VideoInfo } from './VideoInfo';


export class QualityInfoList {
    public video?: VideoInfo;
    public audio?: AudioInfo;
    public constructor(video?: VideoInfo) { 
        this['video'] = video;
    }
    public withVideo(video: VideoInfo): QualityInfoList {
        this['video'] = video;
        return this;
    }
    public withAudio(audio: AudioInfo): QualityInfoList {
        this['audio'] = audio;
        return this;
    }
}