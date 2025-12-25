import { IdInfo } from './IdInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CopyMappingResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: IdInfo;
    public constructor() { 
        super();
    }
    public withCode(code: string): CopyMappingResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): CopyMappingResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: IdInfo): CopyMappingResponse {
        this['data'] = data;
        return this;
    }
}