import { GrantData } from './GrantData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateGrantResponse extends SdkResponse {
    public data?: GrantData;
    public constructor() { 
        super();
    }
    public withData(data: GrantData): UpdateGrantResponse {
        this['data'] = data;
        return this;
    }
}