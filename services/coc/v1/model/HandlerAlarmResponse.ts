
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class HandlerAlarmResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): HandlerAlarmResponse {
        this['body'] = body;
        return this;
    }
}