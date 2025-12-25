import { UpdateDpeInfoStatusRequestBody } from './UpdateDpeInfoStatusRequestBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateMappingInfoStatusResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: UpdateDpeInfoStatusRequestBody;
    public constructor() { 
        super();
    }
    public withCode(code: string): UpdateMappingInfoStatusResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): UpdateMappingInfoStatusResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: UpdateDpeInfoStatusRequestBody): UpdateMappingInfoStatusResponse {
        this['data'] = data;
        return this;
    }
}