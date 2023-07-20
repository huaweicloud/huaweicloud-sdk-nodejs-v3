import { UpdateFlowLogReq } from './UpdateFlowLogReq';


export class UpdateFlowLogReqBody {
    private 'flow_log'?: UpdateFlowLogReq;
    public constructor(flowLog?: UpdateFlowLogReq) { 
        this['flow_log'] = flowLog;
    }
    public withFlowLog(flowLog: UpdateFlowLogReq): UpdateFlowLogReqBody {
        this['flow_log'] = flowLog;
        return this;
    }
    public set flowLog(flowLog: UpdateFlowLogReq  | undefined) {
        this['flow_log'] = flowLog;
    }
    public get flowLog(): UpdateFlowLogReq | undefined {
        return this['flow_log'];
    }
}