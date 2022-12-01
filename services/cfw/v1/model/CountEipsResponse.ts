import { EipCountRespData } from './EipCountRespData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountEipsResponse extends SdkResponse {
    public data?: EipCountRespData;
    public constructor() { 
        super();
    }
    public withData(data: EipCountRespData): CountEipsResponse {
        this['data'] = data;
        return this;
    }
}