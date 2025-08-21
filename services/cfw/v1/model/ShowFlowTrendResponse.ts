import { ShowFlowTrendRespData } from './ShowFlowTrendRespData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFlowTrendResponse extends SdkResponse {
    public data?: ShowFlowTrendRespData;
    public constructor() { 
        super();
    }
    public withData(data: ShowFlowTrendRespData): ShowFlowTrendResponse {
        this['data'] = data;
        return this;
    }
}