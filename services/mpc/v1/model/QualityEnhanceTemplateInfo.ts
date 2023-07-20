import { QualityEnhanceTemplate } from './QualityEnhanceTemplate';
import { XCodeError } from './XCodeError';


export class QualityEnhanceTemplateInfo {
    private 'template_id'?: number;
    public template?: QualityEnhanceTemplate;
    public error?: XCodeError;
    public constructor() { 
    }
    public withTemplateId(templateId: number): QualityEnhanceTemplateInfo {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: number  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): number | undefined {
        return this['template_id'];
    }
    public withTemplate(template: QualityEnhanceTemplate): QualityEnhanceTemplateInfo {
        this['template'] = template;
        return this;
    }
    public withError(error: XCodeError): QualityEnhanceTemplateInfo {
        this['error'] = error;
        return this;
    }
}