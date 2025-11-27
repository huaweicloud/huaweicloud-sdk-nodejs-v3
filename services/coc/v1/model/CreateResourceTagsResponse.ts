import { BasicResourceTagResponseData } from './BasicResourceTagResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateResourceTagsResponse extends SdkResponse {
    public data?: BasicResourceTagResponseData;
    public constructor() { 
        super();
    }
    public withData(data: BasicResourceTagResponseData): CreateResourceTagsResponse {
        this['data'] = data;
        return this;
    }
}