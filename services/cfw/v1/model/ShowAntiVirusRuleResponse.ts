import { AntiVirusRuleVO } from './AntiVirusRuleVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAntiVirusRuleResponse extends SdkResponse {
    public data?: AntiVirusRuleVO;
    public constructor() { 
        super();
    }
    public withData(data: AntiVirusRuleVO): ShowAntiVirusRuleResponse {
        this['data'] = data;
        return this;
    }
}