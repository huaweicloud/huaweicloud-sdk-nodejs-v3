import { UpdateFlowLogRequestBody } from './UpdateFlowLogRequestBody';


export class UpdateFlowLogRequest {
    private 'er_id'?: string;
    private 'flow_log_id'?: string;
    public body?: UpdateFlowLogRequestBody;
    public constructor(erId?: string, flowLogId?: string) { 
        this['er_id'] = erId;
        this['flow_log_id'] = flowLogId;
    }
    public withErId(erId: string): UpdateFlowLogRequest {
        this['er_id'] = erId;
        return this;
    }
    public set erId(erId: string  | undefined) {
        this['er_id'] = erId;
    }
    public get erId(): string | undefined {
        return this['er_id'];
    }
    public withFlowLogId(flowLogId: string): UpdateFlowLogRequest {
        this['flow_log_id'] = flowLogId;
        return this;
    }
    public set flowLogId(flowLogId: string  | undefined) {
        this['flow_log_id'] = flowLogId;
    }
    public get flowLogId(): string | undefined {
        return this['flow_log_id'];
    }
    public withBody(body: UpdateFlowLogRequestBody): UpdateFlowLogRequest {
        this['body'] = body;
        return this;
    }
}