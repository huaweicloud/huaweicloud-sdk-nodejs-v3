import { FlowAnalysisVO } from './FlowAnalysisVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFlowDetailResponse extends SdkResponse {
    public data?: FlowAnalysisVO;
    public constructor() { 
        super();
    }
    public withData(data: FlowAnalysisVO): ShowFlowDetailResponse {
        this['data'] = data;
        return this;
    }
}