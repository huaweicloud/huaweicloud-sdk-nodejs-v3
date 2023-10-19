import { ServiceSetDetailResponseDto } from './ServiceSetDetailResponseDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServiceSetDetailResponse extends SdkResponse {
    public data?: ServiceSetDetailResponseDto;
    public constructor() { 
        super();
    }
    public withData(data: ServiceSetDetailResponseDto): ListServiceSetDetailResponse {
        this['data'] = data;
        return this;
    }
}