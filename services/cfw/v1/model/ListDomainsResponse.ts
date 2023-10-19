import { ListDomainResponseData } from './ListDomainResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDomainsResponse extends SdkResponse {
    public data?: ListDomainResponseData;
    public constructor() { 
        super();
    }
    public withData(data: ListDomainResponseData): ListDomainsResponse {
        this['data'] = data;
        return this;
    }
}