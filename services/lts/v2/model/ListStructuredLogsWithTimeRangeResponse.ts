
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStructuredLogsWithTimeRangeResponse extends SdkResponse {
    public result?: Array<object>;
    public constructor() { 
        super();
    }
    public withResult(result: Array<object>): ListStructuredLogsWithTimeRangeResponse {
        this['result'] = result;
        return this;
    }
}