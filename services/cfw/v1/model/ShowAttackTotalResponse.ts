import { ShowAttackTotalRespData } from './ShowAttackTotalRespData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAttackTotalResponse extends SdkResponse {
    public data?: ShowAttackTotalRespData;
    public constructor() { 
        super();
    }
    public withData(data: ShowAttackTotalRespData): ShowAttackTotalResponse {
        this['data'] = data;
        return this;
    }
}