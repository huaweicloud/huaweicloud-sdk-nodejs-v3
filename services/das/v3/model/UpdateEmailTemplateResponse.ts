
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateEmailTemplateResponse extends SdkResponse {
    public success?: boolean;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): UpdateEmailTemplateResponse {
        this['success'] = success;
        return this;
    }
}