import { FlowLog } from './FlowLog';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFlowLogResponse extends SdkResponse {
    private 'flow_log'?: FlowLog;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withFlowLog(flowLog: FlowLog): ShowFlowLogResponse {
        this['flow_log'] = flowLog;
        return this;
    }
    public set flowLog(flowLog: FlowLog  | undefined) {
        this['flow_log'] = flowLog;
    }
    public get flowLog(): FlowLog | undefined {
        return this['flow_log'];
    }
    public withRequestId(requestId: string): ShowFlowLogResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}