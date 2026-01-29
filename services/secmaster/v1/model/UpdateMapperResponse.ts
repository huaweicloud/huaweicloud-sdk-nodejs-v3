import { CreateDpeMappingRequestBody } from './CreateDpeMappingRequestBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateMapperResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: CreateDpeMappingRequestBody;
    public constructor() { 
        super();
    }
    public withCode(code: string): UpdateMapperResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): UpdateMapperResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: CreateDpeMappingRequestBody): UpdateMapperResponse {
        this['data'] = data;
        return this;
    }
}