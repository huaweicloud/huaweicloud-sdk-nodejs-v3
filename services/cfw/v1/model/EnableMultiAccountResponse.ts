import { EnableMultiAccountRespData } from './EnableMultiAccountRespData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class EnableMultiAccountResponse extends SdkResponse {
    public data?: EnableMultiAccountRespData;
    public constructor() { 
        super();
    }
    public withData(data: EnableMultiAccountRespData): EnableMultiAccountResponse {
        this['data'] = data;
        return this;
    }
}