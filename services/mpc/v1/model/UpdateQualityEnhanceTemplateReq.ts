import { QualityEnhanceTemplate } from './QualityEnhanceTemplate';


export class UpdateQualityEnhanceTemplateReq {
    private 'template_id'?: number;
    public template?: QualityEnhanceTemplate;
    public constructor() { 
    }
    public withTemplateId(templateId: number): UpdateQualityEnhanceTemplateReq {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: number  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): number | undefined {
        return this['template_id'];
    }
    public withTemplate(template: QualityEnhanceTemplate): UpdateQualityEnhanceTemplateReq {
        this['template'] = template;
        return this;
    }
}