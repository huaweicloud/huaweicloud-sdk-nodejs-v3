import { TenantCMKDto } from './TenantCMKDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTenantCmksResponse extends SdkResponse {
    public body?: Array<TenantCMKDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<TenantCMKDto>): ListTenantCmksResponse {
        this['body'] = body;
        return this;
    }
}