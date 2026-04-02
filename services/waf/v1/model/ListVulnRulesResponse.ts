import { VulnDto } from './VulnDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVulnRulesResponse extends SdkResponse {
    public body?: Array<VulnDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<VulnDto>): ListVulnRulesResponse {
        this['body'] = body;
        return this;
    }
}