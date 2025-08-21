

export class DeleteFlowOutputRequest {
    private 'flow_id'?: string;
    private 'output_name'?: string;
    public constructor(flowId?: string, outputName?: string) { 
        this['flow_id'] = flowId;
        this['output_name'] = outputName;
    }
    public withFlowId(flowId: string): DeleteFlowOutputRequest {
        this['flow_id'] = flowId;
        return this;
    }
    public set flowId(flowId: string  | undefined) {
        this['flow_id'] = flowId;
    }
    public get flowId(): string | undefined {
        return this['flow_id'];
    }
    public withOutputName(outputName: string): DeleteFlowOutputRequest {
        this['output_name'] = outputName;
        return this;
    }
    public set outputName(outputName: string  | undefined) {
        this['output_name'] = outputName;
    }
    public get outputName(): string | undefined {
        return this['output_name'];
    }
}