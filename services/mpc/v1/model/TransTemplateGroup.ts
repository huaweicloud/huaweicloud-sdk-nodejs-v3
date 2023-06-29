import { Audio } from './Audio';
import { Common } from './Common';
import { VideoCommon } from './VideoCommon';
import { VideoObj } from './VideoObj';


export class TransTemplateGroup {
    public name: string;
    public videos?: Array<VideoObj>;
    public audio?: Audio;
    private 'video_common'?: VideoCommon | undefined;
    public common?: Common;
    public constructor(name?: any) { 
        this['name'] = name;
    }
    public withName(name: string): TransTemplateGroup {
        this['name'] = name;
        return this;
    }
    public withVideos(videos: Array<VideoObj>): TransTemplateGroup {
        this['videos'] = videos;
        return this;
    }
    public withAudio(audio: Audio): TransTemplateGroup {
        this['audio'] = audio;
        return this;
    }
    public withVideoCommon(videoCommon: VideoCommon): TransTemplateGroup {
        this['video_common'] = videoCommon;
        return this;
    }
    public set videoCommon(videoCommon: VideoCommon | undefined) {
        this['video_common'] = videoCommon;
    }
    public get videoCommon() {
        return this['video_common'];
    }
    public withCommon(common: Common): TransTemplateGroup {
        this['common'] = common;
        return this;
    }
}