
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowErrorLogSwitchStatusResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowErrorLogSwitchStatusResponse {
        this['status'] = status;
        return this;
    }
}