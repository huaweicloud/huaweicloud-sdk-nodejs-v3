import { SmsCountryResp } from './SmsCountryResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSendCountryDetailsResponse extends SdkResponse {
    public body?: Array<SmsCountryResp>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<SmsCountryResp>): ListSendCountryDetailsResponse {
        this['body'] = body;
        return this;
    }
}