import { DomainSetResponseData } from './DomainSetResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteDomainsResponse extends SdkResponse {
    public data?: DomainSetResponseData;
    public constructor() { 
        super();
    }
    public withData(data: DomainSetResponseData): DeleteDomainsResponse {
        this['data'] = data;
        return this;
    }
}