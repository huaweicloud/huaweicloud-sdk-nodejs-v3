import { SmsTemplateResp } from './SmsTemplateResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTemplateDetailsResponse extends SdkResponse {
    public results?: Array<SmsTemplateResp>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withResults(results: Array<SmsTemplateResp>): ListTemplateDetailsResponse {
        this['results'] = results;
        return this;
    }
    public withTotal(total: number): ListTemplateDetailsResponse {
        this['total'] = total;
        return this;
    }
}