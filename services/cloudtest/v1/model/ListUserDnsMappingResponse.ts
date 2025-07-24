import { CommonResponseErrorOfAPITest } from './CommonResponseErrorOfAPITest';
import { DnsMapping } from './DnsMapping';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUserDnsMappingResponse extends SdkResponse {
    public error?: CommonResponseErrorOfAPITest;
    public reason?: string;
    public result?: DnsMapping;
    public status?: string;
    public code?: string;
    public constructor() { 
        super();
    }
    public withError(error: CommonResponseErrorOfAPITest): ListUserDnsMappingResponse {
        this['error'] = error;
        return this;
    }
    public withReason(reason: string): ListUserDnsMappingResponse {
        this['reason'] = reason;
        return this;
    }
    public withResult(result: DnsMapping): ListUserDnsMappingResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListUserDnsMappingResponse {
        this['status'] = status;
        return this;
    }
    public withCode(code: string): ListUserDnsMappingResponse {
        this['code'] = code;
        return this;
    }
}