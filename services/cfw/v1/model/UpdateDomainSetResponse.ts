import { DomainSetResponseData } from './DomainSetResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDomainSetResponse extends SdkResponse {
    public data?: DomainSetResponseData;
    public constructor() { 
        super();
    }
    public withData(data: DomainSetResponseData): UpdateDomainSetResponse {
        this['data'] = data;
        return this;
    }
}