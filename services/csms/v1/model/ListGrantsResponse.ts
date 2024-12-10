import { GrantDTO } from './GrantDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGrantsResponse extends SdkResponse {
    public data?: GrantDTO;
    public constructor() { 
        super();
    }
    public withData(data: GrantDTO): ListGrantsResponse {
        this['data'] = data;
        return this;
    }
}