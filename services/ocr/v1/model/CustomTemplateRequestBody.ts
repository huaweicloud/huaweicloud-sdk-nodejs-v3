

export class CustomTemplateRequestBody {
    public image?: string;
    public url?: string;
    private 'template_id'?: string;
    private 'classifier_id'?: string;
    private 'classifier_mode'?: boolean;
    public constructor() { 
    }
    public withImage(image: string): CustomTemplateRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): CustomTemplateRequestBody {
        this['url'] = url;
        return this;
    }
    public withTemplateId(templateId: string): CustomTemplateRequestBody {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withClassifierId(classifierId: string): CustomTemplateRequestBody {
        this['classifier_id'] = classifierId;
        return this;
    }
    public set classifierId(classifierId: string  | undefined) {
        this['classifier_id'] = classifierId;
    }
    public get classifierId(): string | undefined {
        return this['classifier_id'];
    }
    public withClassifierMode(classifierMode: boolean): CustomTemplateRequestBody {
        this['classifier_mode'] = classifierMode;
        return this;
    }
    public set classifierMode(classifierMode: boolean  | undefined) {
        this['classifier_mode'] = classifierMode;
    }
    public get classifierMode(): boolean | undefined {
        return this['classifier_mode'];
    }
}