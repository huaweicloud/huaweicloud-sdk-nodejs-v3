import { CheckScriptRiskResData } from './CheckScriptRiskResData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckScriptRiskResponse extends SdkResponse {
    public data?: CheckScriptRiskResData;
    public constructor() { 
        super();
    }
    public withData(data: CheckScriptRiskResData): CheckScriptRiskResponse {
        this['data'] = data;
        return this;
    }
}