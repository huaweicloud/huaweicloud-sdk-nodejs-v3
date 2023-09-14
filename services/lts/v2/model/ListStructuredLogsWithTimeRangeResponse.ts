
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStructuredLogsWithTimeRangeResponse extends SdkResponse {
    public context?: Array<string>;
    public constructor() { 
        super();
    }
    public withContext(context: Array<string>): ListStructuredLogsWithTimeRangeResponse {
        this['context'] = context;
        return this;
    }
}