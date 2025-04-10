
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAppRaspSwitchStatusResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowAppRaspSwitchStatusResponse {
        this['status'] = status;
        return this;
    }
}