
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSlowlogDesensitizationSwitchResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowSlowlogDesensitizationSwitchResponse {
        this['status'] = status;
        return this;
    }
}