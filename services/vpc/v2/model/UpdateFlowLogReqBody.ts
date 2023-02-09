import { UpdateFlowLogReq } from './UpdateFlowLogReq';


export class UpdateFlowLogReqBody {
    private 'flow_log': UpdateFlowLogReq | undefined;
    public constructor(flowLog?: any) { 
        this['flow_log'] = flowLog;
    }
    public withFlowLog(flowLog: UpdateFlowLogReq): UpdateFlowLogReqBody {
        this['flow_log'] = flowLog;
        return this;
    }
    public set flowLog(flowLog: UpdateFlowLogReq | undefined) {
        this['flow_log'] = flowLog;
    }
    public get flowLog() {
        return this['flow_log'];
    }
}