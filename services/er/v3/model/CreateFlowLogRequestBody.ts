import { FlowLogRequest } from './FlowLogRequest';


export class CreateFlowLogRequestBody {
    private 'flow_log'?: FlowLogRequest;
    public constructor(flowLog?: FlowLogRequest) { 
        this['flow_log'] = flowLog;
    }
    public withFlowLog(flowLog: FlowLogRequest): CreateFlowLogRequestBody {
        this['flow_log'] = flowLog;
        return this;
    }
    public set flowLog(flowLog: FlowLogRequest  | undefined) {
        this['flow_log'] = flowLog;
    }
    public get flowLog(): FlowLogRequest | undefined {
        return this['flow_log'];
    }
}