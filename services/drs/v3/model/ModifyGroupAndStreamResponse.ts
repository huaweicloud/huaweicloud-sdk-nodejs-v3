
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ModifyGroupAndStreamResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): ModifyGroupAndStreamResponse {
        this['body'] = body;
        return this;
    }
}