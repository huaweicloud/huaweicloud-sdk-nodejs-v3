import { FlowLogResp } from './FlowLogResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateFlowLogResponse extends SdkResponse {
    private 'flow_log'?: FlowLogResp | undefined;
    public constructor() { 
        super();
    }
    public withFlowLog(flowLog: FlowLogResp): UpdateFlowLogResponse {
        this['flow_log'] = flowLog;
        return this;
    }
    public set flowLog(flowLog: FlowLogResp | undefined) {
        this['flow_log'] = flowLog;
    }
    public get flowLog() {
        return this['flow_log'];
    }
}