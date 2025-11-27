
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SaveCredentialForBatchInspectionResponse extends SdkResponse {
    public success?: boolean;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): SaveCredentialForBatchInspectionResponse {
        this['success'] = success;
        return this;
    }
}