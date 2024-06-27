import { CommonResponseDTOData } from './CommonResponseDTOData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateServiceSetResponse extends SdkResponse {
    public data?: CommonResponseDTOData;
    public constructor() { 
        super();
    }
    public withData(data: CommonResponseDTOData): UpdateServiceSetResponse {
        this['data'] = data;
        return this;
    }
}