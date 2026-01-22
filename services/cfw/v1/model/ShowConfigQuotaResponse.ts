import { ShowConfigQuotaDto } from './ShowConfigQuotaDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConfigQuotaResponse extends SdkResponse {
    public data?: ShowConfigQuotaDto;
    public constructor() { 
        super();
    }
    public withData(data: ShowConfigQuotaDto): ShowConfigQuotaResponse {
        this['data'] = data;
        return this;
    }
}