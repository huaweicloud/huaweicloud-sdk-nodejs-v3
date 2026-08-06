
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKillProcessTaskSwitchResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowKillProcessTaskSwitchResponse {
        this['status'] = status;
        return this;
    }
}