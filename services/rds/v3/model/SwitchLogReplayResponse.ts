
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SwitchLogReplayResponse extends SdkResponse {
    public message?: string;
    public constructor() { 
        super();
    }
    public withMessage(message: string): SwitchLogReplayResponse {
        this['message'] = message;
        return this;
    }
}