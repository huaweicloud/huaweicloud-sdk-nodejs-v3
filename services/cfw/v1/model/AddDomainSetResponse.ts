import { DomainSetResponseData } from './DomainSetResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddDomainSetResponse extends SdkResponse {
    public data?: DomainSetResponseData;
    public constructor() { 
        super();
    }
    public withData(data: DomainSetResponseData): AddDomainSetResponse {
        this['data'] = data;
        return this;
    }
}