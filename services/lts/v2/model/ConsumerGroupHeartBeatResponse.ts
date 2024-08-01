
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ConsumerGroupHeartBeatResponse extends SdkResponse {
    public body?: Array<string>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<string>): ConsumerGroupHeartBeatResponse {
        this['body'] = body;
        return this;
    }
}