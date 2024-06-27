import { CommonResponseDTOData } from './CommonResponseDTOData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddServiceSetResponse extends SdkResponse {
    public data?: CommonResponseDTOData;
    public constructor() { 
        super();
    }
    public withData(data: CommonResponseDTOData): AddServiceSetResponse {
        this['data'] = data;
        return this;
    }
}