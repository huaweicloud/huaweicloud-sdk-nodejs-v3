
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class TagDeviceResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): TagDeviceResponse {
        this['body'] = body;
        return this;
    }
}