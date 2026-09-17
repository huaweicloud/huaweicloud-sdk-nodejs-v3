
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeKillTaskSwitchResponse extends SdkResponse {
    public success?: boolean;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): ChangeKillTaskSwitchResponse {
        this['success'] = success;
        return this;
    }
}