import { EipCountRespData } from './EipCountRespData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEipCountResponse extends SdkResponse {
    public data?: EipCountRespData;
    public constructor() { 
        super();
    }
    public withData(data: EipCountRespData): ListEipCountResponse {
        this['data'] = data;
        return this;
    }
}