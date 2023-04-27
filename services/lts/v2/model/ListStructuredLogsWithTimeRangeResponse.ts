
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStructuredLogsWithTimeRangeResponse extends SdkResponse {
    public body?: { [key: string]: Array<object>; };
    public constructor() { 
        super();
    }
    public withBody(body: { [key: string]: Array<object>; }): ListStructuredLogsWithTimeRangeResponse {
        this['body'] = body;
        return this;
    }
}