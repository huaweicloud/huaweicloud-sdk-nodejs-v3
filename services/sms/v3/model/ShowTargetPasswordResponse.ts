
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTargetPasswordResponse extends SdkResponse {
    private 'template_id'?: string | undefined;
    private 'target_password'?: string | undefined;
    public constructor() { 
        super();
    }
    public withTemplateId(templateId: string): ShowTargetPasswordResponse {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId() {
        return this['template_id'];
    }
    public withTargetPassword(targetPassword: string): ShowTargetPasswordResponse {
        this['target_password'] = targetPassword;
        return this;
    }
    public set targetPassword(targetPassword: string | undefined) {
        this['target_password'] = targetPassword;
    }
    public get targetPassword() {
        return this['target_password'];
    }
}