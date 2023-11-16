
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePipelineTemplateResponse extends SdkResponse {
    public templateId?: string;
    public constructor() { 
        super();
    }
    public withTemplateId(templateId: string): CreatePipelineTemplateResponse {
        this['templateId'] = templateId;
        return this;
    }
}