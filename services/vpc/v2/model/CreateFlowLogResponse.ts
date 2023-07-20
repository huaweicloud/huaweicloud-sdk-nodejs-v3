import { FlowLogResp } from './FlowLogResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateFlowLogResponse extends SdkResponse {
    private 'flow_log'?: FlowLogResp;
    public constructor() { 
        super();
    }
    public withFlowLog(flowLog: FlowLogResp): CreateFlowLogResponse {
        this['flow_log'] = flowLog;
        return this;
    }
    public set flowLog(flowLog: FlowLogResp  | undefined) {
        this['flow_log'] = flowLog;
    }
    public get flowLog(): FlowLogResp | undefined {
        return this['flow_log'];
    }
}