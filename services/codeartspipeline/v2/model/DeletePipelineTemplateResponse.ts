
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeletePipelineTemplateResponse extends SdkResponse {
    public templateId?: string;
    public constructor() { 
        super();
    }
    public withTemplateId(templateId: string): DeletePipelineTemplateResponse {
        this['templateId'] = templateId;
        return this;
    }
}