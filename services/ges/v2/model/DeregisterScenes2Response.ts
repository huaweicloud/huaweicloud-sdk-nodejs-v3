
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeregisterScenes2Response extends SdkResponse {
    public success?: Array<string>;
    public failure?: Array<string>;
    public constructor() { 
        super();
    }
    public withSuccess(success: Array<string>): DeregisterScenes2Response {
        this['success'] = success;
        return this;
    }
    public withFailure(failure: Array<string>): DeregisterScenes2Response {
        this['failure'] = failure;
        return this;
    }
}