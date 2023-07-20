import { Audio } from './Audio';
import { Common } from './Common';
import { Video } from './Video';


export class QueryTransTemplate {
    private 'template_name'?: string;
    public video?: Video;
    public audio?: Audio;
    public common?: Common;
    public constructor(templateName?: string, video?: Video) { 
        this['template_name'] = templateName;
        this['video'] = video;
    }
    public withTemplateName(templateName: string): QueryTransTemplate {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withVideo(video: Video): QueryTransTemplate {
        this['video'] = video;
        return this;
    }
    public withAudio(audio: Audio): QueryTransTemplate {
        this['audio'] = audio;
        return this;
    }
    public withCommon(common: Common): QueryTransTemplate {
        this['common'] = common;
        return this;
    }
}