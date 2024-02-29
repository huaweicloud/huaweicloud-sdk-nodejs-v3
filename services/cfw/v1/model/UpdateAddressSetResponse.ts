import { UpdateAddressSetResponseData } from './UpdateAddressSetResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAddressSetResponse extends SdkResponse {
    public data?: UpdateAddressSetResponseData;
    public constructor() { 
        super();
    }
    public withData(data: UpdateAddressSetResponseData): UpdateAddressSetResponse {
        this['data'] = data;
        return this;
    }
}