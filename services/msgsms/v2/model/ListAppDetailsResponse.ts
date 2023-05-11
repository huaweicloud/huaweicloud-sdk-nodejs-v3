import { SmsAppQueryResp } from './SmsAppQueryResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppDetailsResponse extends SdkResponse {
    public results?: Array<SmsAppQueryResp>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withResults(results: Array<SmsAppQueryResp>): ListAppDetailsResponse {
        this['results'] = results;
        return this;
    }
    public withTotal(total: number): ListAppDetailsResponse {
        this['total'] = total;
        return this;
    }
}