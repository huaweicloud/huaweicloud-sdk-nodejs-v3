import { Mapstringstring } from './Mapstringstring';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteDomainSetResponse extends SdkResponse {
    public data?: { [key: string]: Array<Mapstringstring>; };
    public constructor() { 
        super();
    }
    public withData(data: { [key: string]: Array<Mapstringstring>; }): BatchDeleteDomainSetResponse {
        this['data'] = data;
        return this;
    }
}