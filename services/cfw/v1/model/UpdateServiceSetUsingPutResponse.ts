import { IdObject } from './IdObject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateServiceSetUsingPutResponse extends SdkResponse {
    public data?: IdObject;
    public constructor() { 
        super();
    }
    public withData(data: IdObject): UpdateServiceSetUsingPutResponse {
        this['data'] = data;
        return this;
    }
}