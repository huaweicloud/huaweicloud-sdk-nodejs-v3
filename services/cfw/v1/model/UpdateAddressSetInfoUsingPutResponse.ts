import { IdObject } from './IdObject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAddressSetInfoUsingPutResponse extends SdkResponse {
    public data?: IdObject;
    public constructor() { 
        super();
    }
    public withData(data: IdObject): UpdateAddressSetInfoUsingPutResponse {
        this['data'] = data;
        return this;
    }
}