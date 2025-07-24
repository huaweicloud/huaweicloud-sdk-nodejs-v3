import { AvailableConfig } from './AvailableConfig';
import { CommonResponseErrorAvailableConfig } from './CommonResponseErrorAvailableConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAvailableConfigResponse extends SdkResponse {
    public code?: string;
    public error?: CommonResponseErrorAvailableConfig;
    public reason?: string;
    public result?: AvailableConfig;
    public status?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ListAvailableConfigResponse {
        this['code'] = code;
        return this;
    }
    public withError(error: CommonResponseErrorAvailableConfig): ListAvailableConfigResponse {
        this['error'] = error;
        return this;
    }
    public withReason(reason: string): ListAvailableConfigResponse {
        this['reason'] = reason;
        return this;
    }
    public withResult(result: AvailableConfig): ListAvailableConfigResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListAvailableConfigResponse {
        this['status'] = status;
        return this;
    }
}