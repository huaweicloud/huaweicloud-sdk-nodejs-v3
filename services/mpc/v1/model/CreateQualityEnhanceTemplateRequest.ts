import { QualityEnhanceTemplate } from './QualityEnhanceTemplate';


export class CreateQualityEnhanceTemplateRequest {
    public body?: QualityEnhanceTemplate;
    public constructor() { 
    }
    public withBody(body: QualityEnhanceTemplate): CreateQualityEnhanceTemplateRequest {
        this['body'] = body;
        return this;
    }
}