
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKillProcessStatusResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowKillProcessStatusResponse {
        this['status'] = status;
        return this;
    }
}