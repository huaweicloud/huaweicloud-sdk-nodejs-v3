import { ListFlowStatisticRespData } from './ListFlowStatisticRespData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFlowStatisticResponse extends SdkResponse {
    public data?: ListFlowStatisticRespData;
    public constructor() { 
        super();
    }
    public withData(data: ListFlowStatisticRespData): ListFlowStatisticResponse {
        this['data'] = data;
        return this;
    }
}