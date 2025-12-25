import { DpeMappingDetail } from './DpeMappingDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateMapperResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: DpeMappingDetail;
    public constructor() { 
        super();
    }
    public withCode(code: string): CreateMapperResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): CreateMapperResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: DpeMappingDetail): CreateMapperResponse {
        this['data'] = data;
        return this;
    }
}