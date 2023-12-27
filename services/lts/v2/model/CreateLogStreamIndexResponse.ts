
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateLogStreamIndexResponse extends SdkResponse {
    public errorCode?: string;
    public errorMessage?: string;
    public result?: string;
    public isQueryComplete?: boolean;
    public constructor() { 
        super();
    }
    public withErrorCode(errorCode: string): CreateLogStreamIndexResponse {
        this['errorCode'] = errorCode;
        return this;
    }
    public withErrorMessage(errorMessage: string): CreateLogStreamIndexResponse {
        this['errorMessage'] = errorMessage;
        return this;
    }
    public withResult(result: string): CreateLogStreamIndexResponse {
        this['result'] = result;
        return this;
    }
    public withIsQueryComplete(isQueryComplete: boolean): CreateLogStreamIndexResponse {
        this['isQueryComplete'] = isQueryComplete;
        return this;
    }
}