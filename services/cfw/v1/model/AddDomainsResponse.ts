import { DomainSetResponseData } from './DomainSetResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddDomainsResponse extends SdkResponse {
    public data?: DomainSetResponseData;
    public constructor() { 
        super();
    }
    public withData(data: DomainSetResponseData): AddDomainsResponse {
        this['data'] = data;
        return this;
    }
}