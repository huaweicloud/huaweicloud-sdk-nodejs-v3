
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateLaunchTemplateResponse extends SdkResponse {
    private 'launch_template_id'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withLaunchTemplateId(launchTemplateId: string): CreateLaunchTemplateResponse {
        this['launch_template_id'] = launchTemplateId;
        return this;
    }
    public set launchTemplateId(launchTemplateId: string  | undefined) {
        this['launch_template_id'] = launchTemplateId;
    }
    public get launchTemplateId(): string | undefined {
        return this['launch_template_id'];
    }
    public withXRequestId(xRequestId: string): CreateLaunchTemplateResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}