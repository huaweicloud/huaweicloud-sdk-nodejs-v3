import { UpdateQualityEnhanceTemplateReq } from './UpdateQualityEnhanceTemplateReq';


export class UpdateQualityEnhanceTemplateRequest {
    public body?: UpdateQualityEnhanceTemplateReq;
    public constructor() { 
    }
    public withBody(body: UpdateQualityEnhanceTemplateReq): UpdateQualityEnhanceTemplateRequest {
        this['body'] = body;
        return this;
    }
}