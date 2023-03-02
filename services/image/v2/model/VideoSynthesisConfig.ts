import { VideoSynthesisConfigCommon } from './VideoSynthesisConfigCommon';


export class VideoSynthesisConfig {
    public common?: VideoSynthesisConfigCommon;
    public constructor() { 
    }
    public withCommon(common: VideoSynthesisConfigCommon): VideoSynthesisConfig {
        this['common'] = common;
        return this;
    }
}