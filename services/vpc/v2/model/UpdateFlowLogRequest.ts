import { UpdateFlowLogReqBody } from './UpdateFlowLogReqBody';


export class UpdateFlowLogRequest {
    private 'flowlog_id': string | undefined;
    public body?: UpdateFlowLogReqBody;
    public constructor(flowlogId?: any) { 
        this['flowlog_id'] = flowlogId;
    }
    public withFlowlogId(flowlogId: string): UpdateFlowLogRequest {
        this['flowlog_id'] = flowlogId;
        return this;
    }
    public set flowlogId(flowlogId: string | undefined) {
        this['flowlog_id'] = flowlogId;
    }
    public get flowlogId() {
        return this['flowlog_id'];
    }
    public withBody(body: UpdateFlowLogReqBody): UpdateFlowLogRequest {
        this['body'] = body;
        return this;
    }
}