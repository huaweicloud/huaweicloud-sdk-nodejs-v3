import { DeleteDomainSetResponseDatas } from './DeleteDomainSetResponseDatas';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteDomainSetResponse extends SdkResponse {
    public data?: DeleteDomainSetResponseDatas;
    public constructor() { 
        super();
    }
    public withData(data: DeleteDomainSetResponseDatas): BatchDeleteDomainSetResponse {
        this['data'] = data;
        return this;
    }
}