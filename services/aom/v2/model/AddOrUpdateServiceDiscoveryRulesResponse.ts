
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddOrUpdateServiceDiscoveryRulesResponse extends SdkResponse {
    public errorCode?: string;
    public errorMessage?: string;
    public responseStatus?: number;
    public id?: Array<string>;
    public results?: Array<{ [key: string]: string; }>;
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
    public withId(id: Array<string>): AddOrUpdateServiceDiscoveryRulesResponse {
        this['id'] = id;
        return this;
    }
    public withResults(results: Array<{ [key: string]: string; }>): AddOrUpdateServiceDiscoveryRulesResponse {
        this['results'] = results;
        return this;
    }
}