
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAuthorizeTxtRecordVerificationResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): CreateAuthorizeTxtRecordVerificationResponse {
        this['status'] = status;
        return this;
    }
}