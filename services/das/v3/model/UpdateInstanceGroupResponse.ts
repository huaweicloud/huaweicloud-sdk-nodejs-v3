
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateInstanceGroupResponse extends SdkResponse {
    public success?: boolean;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): UpdateInstanceGroupResponse {
        this['success'] = success;
        return this;
    }
}