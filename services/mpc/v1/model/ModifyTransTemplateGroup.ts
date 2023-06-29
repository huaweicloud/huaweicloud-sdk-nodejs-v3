import { Audio } from './Audio';
import { Common } from './Common';
import { VideoCommon } from './VideoCommon';
import { VideoObj } from './VideoObj';


export class ModifyTransTemplateGroup {
    private 'group_id': string | undefined;
    public name?: string;
    public videos?: Array<VideoObj>;
    public audio?: Audio;
    private 'video_common'?: VideoCommon | undefined;
    public common?: Common;
    public constructor(groupId?: any) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: string): ModifyTransTemplateGroup {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withName(name: string): ModifyTransTemplateGroup {
        this['name'] = name;
        return this;
    }
    public withVideos(videos: Array<VideoObj>): ModifyTransTemplateGroup {
        this['videos'] = videos;
        return this;
    }
    public withAudio(audio: Audio): ModifyTransTemplateGroup {
        this['audio'] = audio;
        return this;
    }
    public withVideoCommon(videoCommon: VideoCommon): ModifyTransTemplateGroup {
        this['video_common'] = videoCommon;
        return this;
    }
    public set videoCommon(videoCommon: VideoCommon | undefined) {
        this['video_common'] = videoCommon;
    }
    public get videoCommon() {
        return this['video_common'];
    }
    public withCommon(common: Common): ModifyTransTemplateGroup {
        this['common'] = common;
        return this;
    }
}