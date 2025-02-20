
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateApplicationViewResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): BatchCreateApplicationViewResponse {
        this['body'] = body;
        return this;
    }
}