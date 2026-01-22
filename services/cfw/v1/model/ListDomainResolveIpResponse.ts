import { ParseIpListResponse } from './ParseIpListResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDomainResolveIpResponse extends SdkResponse {
    public data?: ParseIpListResponse;
    public constructor() { 
        super();
    }
    public withData(data: ParseIpListResponse): ListDomainResolveIpResponse {
        this['data'] = data;
        return this;
    }
}