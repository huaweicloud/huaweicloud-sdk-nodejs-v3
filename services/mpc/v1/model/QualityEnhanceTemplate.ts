import { QualityEnhanceVideo } from './QualityEnhanceVideo';


export class QualityEnhanceTemplate {
    private 'template_name': string | undefined;
    private 'template_description'?: string | undefined;
    public video?: QualityEnhanceVideo;
    public constructor(templateName?: any) { 
        this['template_name'] = templateName;
    }
    public withTemplateName(templateName: string): QualityEnhanceTemplate {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName() {
        return this['template_name'];
    }
    public withTemplateDescription(templateDescription: string): QualityEnhanceTemplate {
        this['template_description'] = templateDescription;
        return this;
    }
    public set templateDescription(templateDescription: string | undefined) {
        this['template_description'] = templateDescription;
    }
    public get templateDescription() {
        return this['template_description'];
    }
    public withVideo(video: QualityEnhanceVideo): QualityEnhanceTemplate {
        this['video'] = video;
        return this;
    }
}