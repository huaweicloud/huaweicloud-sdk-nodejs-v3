import { SmsID } from './SmsID';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchSendSmsResponse extends SdkResponse {
    public code?: string;
    public description?: string;
    public result?: Array<SmsID>;
    public constructor() { 
        super();
    }
    public withCode(code: string): BatchSendSmsResponse {
        this['code'] = code;
        return this;
    }
    public withDescription(description: string): BatchSendSmsResponse {
        this['description'] = description;
        return this;
    }
    public withResult(result: Array<SmsID>): BatchSendSmsResponse {
        this['result'] = result;
        return this;
    }
}