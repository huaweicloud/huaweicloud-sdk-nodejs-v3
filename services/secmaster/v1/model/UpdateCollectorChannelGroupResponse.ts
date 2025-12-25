
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateCollectorChannelGroupResponse extends SdkResponse {
    public success?: boolean;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): UpdateCollectorChannelGroupResponse {
        this['success'] = success;
        return this;
    }
}