import { DpeMappingDetail } from './DpeMappingDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMapperDetailResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: DpeMappingDetail;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowMapperDetailResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ShowMapperDetailResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: DpeMappingDetail): ShowMapperDetailResponse {
        this['data'] = data;
        return this;
    }
}