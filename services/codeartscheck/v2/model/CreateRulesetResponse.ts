
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateRulesetResponse extends SdkResponse {
    private 'template_id'?: string;
    public constructor() { 
        super();
    }
    public withTemplateId(templateId: string): CreateRulesetResponse {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
}