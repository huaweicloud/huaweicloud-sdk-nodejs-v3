import { ServiceSetDetailResponseDto } from './ServiceSetDetailResponseDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServiceSetDetailsResponse extends SdkResponse {
    public data?: ServiceSetDetailResponseDto;
    public constructor() { 
        super();
    }
    public withData(data: ServiceSetDetailResponseDto): ListServiceSetDetailsResponse {
        this['data'] = data;
        return this;
    }
}