import { QualityEnhanceVideo } from './QualityEnhanceVideo';


export class QualityEnhanceTemplate {
    private 'template_name'?: string;
    private 'template_description'?: string;
    public video?: QualityEnhanceVideo;
    public constructor(templateName?: string) { 
        this['template_name'] = templateName;
    }
    public withTemplateName(templateName: string): QualityEnhanceTemplate {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withTemplateDescription(templateDescription: string): QualityEnhanceTemplate {
        this['template_description'] = templateDescription;
        return this;
    }
    public set templateDescription(templateDescription: string  | undefined) {
        this['template_description'] = templateDescription;
    }
    public get templateDescription(): string | undefined {
        return this['template_description'];
    }
    public withVideo(video: QualityEnhanceVideo): QualityEnhanceTemplate {
        this['video'] = video;
        return this;
    }
}