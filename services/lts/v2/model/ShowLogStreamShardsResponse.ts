
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLogStreamShardsResponse extends SdkResponse {
    public errorCode?: string;
    public isQueryComplete?: boolean;
    public result?: string;
    public constructor() { 
        super();
    }
    public withErrorCode(errorCode: string): ShowLogStreamShardsResponse {
        this['errorCode'] = errorCode;
        return this;
    }
    public withIsQueryComplete(isQueryComplete: boolean): ShowLogStreamShardsResponse {
        this['isQueryComplete'] = isQueryComplete;
        return this;
    }
    public withResult(result: string): ShowLogStreamShardsResponse {
        this['result'] = result;
        return this;
    }
}