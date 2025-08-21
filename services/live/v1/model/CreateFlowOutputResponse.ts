import { FlowsOutput } from './FlowsOutput';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateFlowOutputResponse extends SdkResponse {
    private 'flow_id'?: string;
    public outputs?: Array<FlowsOutput>;
    public constructor() { 
        super();
    }
    public withFlowId(flowId: string): CreateFlowOutputResponse {
        this['flow_id'] = flowId;
        return this;
    }
    public set flowId(flowId: string  | undefined) {
        this['flow_id'] = flowId;
    }
    public get flowId(): string | undefined {
        return this['flow_id'];
    }
    public withOutputs(outputs: Array<FlowsOutput>): CreateFlowOutputResponse {
        this['outputs'] = outputs;
        return this;
    }
}