
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCollectorChannelOperationResponse extends SdkResponse {
    public success?: boolean;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): CreateCollectorChannelOperationResponse {
        this['success'] = success;
        return this;
    }
}