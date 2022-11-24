import { IdObject } from './IdObject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddBlackWhiteListUsingPostResponse extends SdkResponse {
    public data?: IdObject;
    public constructor() { 
        super();
    }
    public withData(data: IdObject): AddBlackWhiteListUsingPostResponse {
        this['data'] = data;
        return this;
    }
}