import { CommonResponseErrorOfAPITest } from './CommonResponseErrorOfAPITest';
import { DnsMapping } from './DnsMapping';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateUserDnsMappingResponse extends SdkResponse {
    public error?: CommonResponseErrorOfAPITest;
    public reason?: string;
    public result?: DnsMapping;
    public status?: string;
    public code?: string;
    public constructor() { 
        super();
    }
    public withError(error: CommonResponseErrorOfAPITest): UpdateUserDnsMappingResponse {
        this['error'] = error;
        return this;
    }
    public withReason(reason: string): UpdateUserDnsMappingResponse {
        this['reason'] = reason;
        return this;
    }
    public withResult(result: DnsMapping): UpdateUserDnsMappingResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): UpdateUserDnsMappingResponse {
        this['status'] = status;
        return this;
    }
    public withCode(code: string): UpdateUserDnsMappingResponse {
        this['code'] = code;
        return this;
    }
}