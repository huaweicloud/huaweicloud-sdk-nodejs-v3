import { Audio } from './Audio';
import { Common } from './Common';
import { Video } from './Video';


export class TransTemplate {
    private 'template_name': string | undefined;
    public video?: Video;
    public audio?: Audio;
    public common: Common;
    public constructor(templateName?: any, common?: any) { 
        this['template_name'] = templateName;
        this['common'] = common;
    }
    public withTemplateName(templateName: string): TransTemplate {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName() {
        return this['template_name'];
    }
    public withVideo(video: Video): TransTemplate {
        this['video'] = video;
        return this;
    }
    public withAudio(audio: Audio): TransTemplate {
        this['audio'] = audio;
        return this;
    }
    public withCommon(common: Common): TransTemplate {
        this['common'] = common;
        return this;
    }
}