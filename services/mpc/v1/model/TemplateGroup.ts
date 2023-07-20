import { Audio } from './Audio';
import { Common } from './Common';
import { VideoAndTemplate } from './VideoAndTemplate';
import { VideoCommon } from './VideoCommon';


export class TemplateGroup {
    private 'group_id'?: string;
    public name?: string;
    private 'template_ids'?: Array<number>;
    public videos?: Array<VideoAndTemplate>;
    public audio?: Audio;
    private 'video_common'?: VideoCommon;
    public common?: Common;
    public constructor() { 
    }
    public withGroupId(groupId: string): TemplateGroup {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withName(name: string): TemplateGroup {
        this['name'] = name;
        return this;
    }
    public withTemplateIds(templateIds: Array<number>): TemplateGroup {
        this['template_ids'] = templateIds;
        return this;
    }
    public set templateIds(templateIds: Array<number>  | undefined) {
        this['template_ids'] = templateIds;
    }
    public get templateIds(): Array<number> | undefined {
        return this['template_ids'];
    }
    public withVideos(videos: Array<VideoAndTemplate>): TemplateGroup {
        this['videos'] = videos;
        return this;
    }
    public withAudio(audio: Audio): TemplateGroup {
        this['audio'] = audio;
        return this;
    }
    public withVideoCommon(videoCommon: VideoCommon): TemplateGroup {
        this['video_common'] = videoCommon;
        return this;
    }
    public set videoCommon(videoCommon: VideoCommon  | undefined) {
        this['video_common'] = videoCommon;
    }
    public get videoCommon(): VideoCommon | undefined {
        return this['video_common'];
    }
    public withCommon(common: Common): TemplateGroup {
        this['common'] = common;
        return this;
    }
}