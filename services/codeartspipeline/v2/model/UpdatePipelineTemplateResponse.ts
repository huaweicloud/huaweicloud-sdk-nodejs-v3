
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePipelineTemplateResponse extends SdkResponse {
    public templateId?: string;
    public constructor() { 
        super();
    }
    public withTemplateId(templateId: string): UpdatePipelineTemplateResponse {
        this['templateId'] = templateId;
        return this;
    }
}