

export class ShowFlowLogRequest {
    private 'flowlog_id': string | undefined;
    public constructor(flowlogId?: any) { 
        this['flowlog_id'] = flowlogId;
    }
    public withFlowlogId(flowlogId: string): ShowFlowLogRequest {
        this['flowlog_id'] = flowlogId;
        return this;
    }
    public set flowlogId(flowlogId: string | undefined) {
        this['flowlog_id'] = flowlogId;
    }
    public get flowlogId() {
        return this['flowlog_id'];
    }
}