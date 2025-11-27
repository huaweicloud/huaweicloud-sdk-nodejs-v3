
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteEmailTemplateResponse extends SdkResponse {
    public success?: boolean;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): DeleteEmailTemplateResponse {
        this['success'] = success;
        return this;
    }
}