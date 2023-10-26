
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddOrUpdateServiceDiscoveryRulesResponse extends SdkResponse {
    public errorCode?: string;
    public errorMessage?: string;
    public responseStatus?: number;
    public constructor() { 
        super();
    }
    public withErrorCode(errorCode: string): AddOrUpdateServiceDiscoveryRulesResponse {
        this['errorCode'] = errorCode;
        return this;
    }
    public withErrorMessage(errorMessage: string): AddOrUpdateServiceDiscoveryRulesResponse {
        this['errorMessage'] = errorMessage;
        return this;
    }
    public withResponseStatus(responseStatus: number): AddOrUpdateServiceDiscoveryRulesResponse {
        this['responseStatus'] = responseStatus;
        return this;
    }
}