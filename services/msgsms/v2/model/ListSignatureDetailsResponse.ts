import { SmsSignatureResp } from './SmsSignatureResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSignatureDetailsResponse extends SdkResponse {
    public results?: Array<SmsSignatureResp>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withResults(results: Array<SmsSignatureResp>): ListSignatureDetailsResponse {
        this['results'] = results;
        return this;
    }
    public withTotal(total: number): ListSignatureDetailsResponse {
        this['total'] = total;
        return this;
    }
}