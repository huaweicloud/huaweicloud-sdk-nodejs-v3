import { AddFlowOutputsRequest } from './AddFlowOutputsRequest';


export class CreateFlowOutputRequest {
    private 'flow_id'?: string;
    public body?: Array<AddFlowOutputsRequest>;
    public constructor(flowId?: string) { 
        this['flow_id'] = flowId;
    }
    public withFlowId(flowId: string): CreateFlowOutputRequest {
        this['flow_id'] = flowId;
        return this;
    }
    public set flowId(flowId: string  | undefined) {
        this['flow_id'] = flowId;
    }
    public get flowId(): string | undefined {
        return this['flow_id'];
    }
    public withBody(body: Array<AddFlowOutputsRequest>): CreateFlowOutputRequest {
        this['body'] = body;
        return this;
    }
}