
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CloseDeviceTunnelResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): CloseDeviceTunnelResponse {
        this['body'] = body;
        return this;
    }
}