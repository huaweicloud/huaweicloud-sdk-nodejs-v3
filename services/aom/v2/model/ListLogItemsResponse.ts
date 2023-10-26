
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLogItemsResponse extends SdkResponse {
    public errorCode?: string;
    public errorMessage?: string;
    public result?: string;
    public constructor() { 
        super();
    }
    public withErrorCode(errorCode: string): ListLogItemsResponse {
        this['errorCode'] = errorCode;
        return this;
    }
    public withErrorMessage(errorMessage: string): ListLogItemsResponse {
        this['errorMessage'] = errorMessage;
        return this;
    }
    public withResult(result: string): ListLogItemsResponse {
        this['result'] = result;
        return this;
    }
}