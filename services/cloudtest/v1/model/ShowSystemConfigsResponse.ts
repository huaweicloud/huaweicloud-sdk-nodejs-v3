import { SystemConfig } from './SystemConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSystemConfigsResponse extends SdkResponse {
    public code?: string;
    public data?: Array<SystemConfig>;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowSystemConfigsResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: Array<SystemConfig>): ShowSystemConfigsResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): ShowSystemConfigsResponse {
        this['message'] = message;
        return this;
    }
}