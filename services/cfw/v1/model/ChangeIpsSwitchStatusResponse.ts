import { CommonResponseDTOData } from './CommonResponseDTOData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeIpsSwitchStatusResponse extends SdkResponse {
    public data?: CommonResponseDTOData;
    public constructor() { 
        super();
    }
    public withData(data: CommonResponseDTOData): ChangeIpsSwitchStatusResponse {
        this['data'] = data;
        return this;
    }
}