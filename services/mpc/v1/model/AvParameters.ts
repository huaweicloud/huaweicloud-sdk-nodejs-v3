import { Audio } from './Audio';
import { Common } from './Common';
import { VideoParameters } from './VideoParameters';


export class AvParameters {
    public video?: VideoParameters;
    public audio?: Audio;
    public common?: Common;
    public constructor(common?: Common) { 
        this['common'] = common;
    }
    public withVideo(video: VideoParameters): AvParameters {
        this['video'] = video;
        return this;
    }
    public withAudio(audio: Audio): AvParameters {
        this['audio'] = audio;
        return this;
    }
    public withCommon(common: Common): AvParameters {
        this['common'] = common;
        return this;
    }
}