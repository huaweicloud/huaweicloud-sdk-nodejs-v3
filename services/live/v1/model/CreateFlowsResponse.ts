import { FlowDetailRespBody } from './FlowDetailRespBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateFlowsResponse extends SdkResponse {
    public flow?: FlowDetailRespBody;
    public constructor() { 
        super();
    }
    public withFlow(flow: FlowDetailRespBody): CreateFlowsResponse {
        this['flow'] = flow;
        return this;
    }
}