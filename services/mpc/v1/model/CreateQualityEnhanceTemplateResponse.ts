
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateQualityEnhanceTemplateResponse extends SdkResponse {
    private 'template_id'?: number;
    public constructor() { 
        super();
    }
    public withTemplateId(templateId: number): CreateQualityEnhanceTemplateResponse {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: number  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): number | undefined {
        return this['template_id'];
    }
}