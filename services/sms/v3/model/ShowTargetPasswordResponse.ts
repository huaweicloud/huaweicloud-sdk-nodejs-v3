
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTargetPasswordResponse extends SdkResponse {
    private 'template_id'?: string;
    private 'target_password'?: string;
    public constructor() { 
        super();
    }
    public withTemplateId(templateId: string): ShowTargetPasswordResponse {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withTargetPassword(targetPassword: string): ShowTargetPasswordResponse {
        this['target_password'] = targetPassword;
        return this;
    }
    public set targetPassword(targetPassword: string  | undefined) {
        this['target_password'] = targetPassword;
    }
    public get targetPassword(): string | undefined {
        return this['target_password'];
    }
}