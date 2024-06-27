import { CommonResponseDTOData } from './CommonResponseDTOData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeIpsProtectModeResponse extends SdkResponse {
    public data?: CommonResponseDTOData;
    public constructor() { 
        super();
    }
    public withData(data: CommonResponseDTOData): ChangeIpsProtectModeResponse {
        this['data'] = data;
        return this;
    }
}