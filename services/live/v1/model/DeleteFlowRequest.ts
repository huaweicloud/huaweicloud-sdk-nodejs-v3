

export class DeleteFlowRequest {
    private 'flow_id'?: string;
    public constructor(flowId?: string) { 
        this['flow_id'] = flowId;
    }
    public withFlowId(flowId: string): DeleteFlowRequest {
        this['flow_id'] = flowId;
        return this;
    }
    public set flowId(flowId: string  | undefined) {
        this['flow_id'] = flowId;
    }
    public get flowId(): string | undefined {
        return this['flow_id'];
    }
}