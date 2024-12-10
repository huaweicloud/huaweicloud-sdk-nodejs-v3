import { GrantData } from './GrantData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateGrantsResponse extends SdkResponse {
    public data?: GrantData;
    public constructor() { 
        super();
    }
    public withData(data: GrantData): CreateGrantsResponse {
        this['data'] = data;
        return this;
    }
}