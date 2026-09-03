
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SynchronizeInstanceListNewResponse extends SdkResponse {
    public success?: boolean;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): SynchronizeInstanceListNewResponse {
        this['success'] = success;
        return this;
    }
}