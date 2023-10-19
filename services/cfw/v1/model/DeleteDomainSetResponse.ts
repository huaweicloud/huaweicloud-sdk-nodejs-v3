import { DomainSetResponseData } from './DomainSetResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteDomainSetResponse extends SdkResponse {
    public data?: DomainSetResponseData;
    public constructor() { 
        super();
    }
    public withData(data: DomainSetResponseData): DeleteDomainSetResponse {
        this['data'] = data;
        return this;
    }
}