
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetSensitiveResultSwitchResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): SetSensitiveResultSwitchResponse {
        this['status'] = status;
        return this;
    }
}