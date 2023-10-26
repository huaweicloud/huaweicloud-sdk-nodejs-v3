import { AppRules } from './AppRules';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServiceDiscoveryRulesResponse extends SdkResponse {
    public appRules?: Array<AppRules>;
    public errorCode?: string;
    public errorMessage?: string;
    public constructor() { 
        super();
    }
    public withAppRules(appRules: Array<AppRules>): ListServiceDiscoveryRulesResponse {
        this['appRules'] = appRules;
        return this;
    }
    public withErrorCode(errorCode: string): ListServiceDiscoveryRulesResponse {
        this['errorCode'] = errorCode;
        return this;
    }
    public withErrorMessage(errorMessage: string): ListServiceDiscoveryRulesResponse {
        this['errorMessage'] = errorMessage;
        return this;
    }
}