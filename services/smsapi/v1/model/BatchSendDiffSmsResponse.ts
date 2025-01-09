import { SmsID } from './SmsID';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchSendDiffSmsResponse extends SdkResponse {
    public code?: string;
    public description?: string;
    public result?: Array<SmsID>;
    public constructor() { 
        super();
    }
    public withCode(code: string): BatchSendDiffSmsResponse {
        this['code'] = code;
        return this;
    }
    public withDescription(description: string): BatchSendDiffSmsResponse {
        this['description'] = description;
        return this;
    }
    public withResult(result: Array<SmsID>): BatchSendDiffSmsResponse {
        this['result'] = result;
        return this;
    }
}