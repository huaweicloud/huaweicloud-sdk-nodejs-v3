
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateCheckPointResponse extends SdkResponse {
    public errorCode?: string;
    public errorMessage?: string;
    public constructor() { 
        super();
    }
    public withErrorCode(errorCode: string): UpdateCheckPointResponse {
        this['errorCode'] = errorCode;
        return this;
    }
    public withErrorMessage(errorMessage: string): UpdateCheckPointResponse {
        this['errorMessage'] = errorMessage;
        return this;
    }
}