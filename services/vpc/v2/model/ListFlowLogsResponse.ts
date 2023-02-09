import { FlowLogResp } from './FlowLogResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFlowLogsResponse extends SdkResponse {
    private 'flow_logs'?: Array<FlowLogResp> | undefined;
    public constructor() { 
        super();
    }
    public withFlowLogs(flowLogs: Array<FlowLogResp>): ListFlowLogsResponse {
        this['flow_logs'] = flowLogs;
        return this;
    }
    public set flowLogs(flowLogs: Array<FlowLogResp> | undefined) {
        this['flow_logs'] = flowLogs;
    }
    public get flowLogs() {
        return this['flow_logs'];
    }
}