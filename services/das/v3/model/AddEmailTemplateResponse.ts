
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddEmailTemplateResponse extends SdkResponse {
    public success?: boolean;
    private 'template_id'?: number;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): AddEmailTemplateResponse {
        this['success'] = success;
        return this;
    }
    public withTemplateId(templateId: number): AddEmailTemplateResponse {
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