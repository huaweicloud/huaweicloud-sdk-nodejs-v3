import { ListDomainsetsResponseData } from './ListDomainsetsResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDomainSetsResponse extends SdkResponse {
    public data?: ListDomainsetsResponseData;
    public constructor() { 
        super();
    }
    public withData(data: ListDomainsetsResponseData): ListDomainSetsResponse {
        this['data'] = data;
        return this;
    }
}