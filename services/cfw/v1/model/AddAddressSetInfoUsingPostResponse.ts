import { IdObject } from './IdObject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddAddressSetInfoUsingPostResponse extends SdkResponse {
    public data?: IdObject;
    public constructor() { 
        super();
    }
    public withData(data: IdObject): AddAddressSetInfoUsingPostResponse {
        this['data'] = data;
        return this;
    }
}