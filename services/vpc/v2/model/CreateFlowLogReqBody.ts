import { CreateFlowLogReq } from './CreateFlowLogReq';


export class CreateFlowLogReqBody {
    private 'flow_log'?: CreateFlowLogReq;
    public constructor(flowLog?: CreateFlowLogReq) { 
        this['flow_log'] = flowLog;
    }
    public withFlowLog(flowLog: CreateFlowLogReq): CreateFlowLogReqBody {
        this['flow_log'] = flowLog;
        return this;
    }
    public set flowLog(flowLog: CreateFlowLogReq  | undefined) {
        this['flow_log'] = flowLog;
    }
    public get flowLog(): CreateFlowLogReq | undefined {
        return this['flow_log'];
    }
}