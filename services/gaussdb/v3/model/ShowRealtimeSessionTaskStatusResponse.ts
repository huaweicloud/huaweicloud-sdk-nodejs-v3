
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRealtimeSessionTaskStatusResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowRealtimeSessionTaskStatusResponse {
        this['status'] = status;
        return this;
    }
}