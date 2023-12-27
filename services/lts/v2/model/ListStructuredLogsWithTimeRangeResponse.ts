
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStructuredLogsWithTimeRangeResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): ListStructuredLogsWithTimeRangeResponse {
        this['body'] = body;
        return this;
    }
}