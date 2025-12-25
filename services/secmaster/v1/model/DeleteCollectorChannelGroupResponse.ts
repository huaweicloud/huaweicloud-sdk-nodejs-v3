
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteCollectorChannelGroupResponse extends SdkResponse {
    public success?: boolean;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): DeleteCollectorChannelGroupResponse {
        this['success'] = success;
        return this;
    }
}