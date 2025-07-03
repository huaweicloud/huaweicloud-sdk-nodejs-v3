import { FlowOutput } from './FlowOutput';
import { FlowSource } from './FlowSource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFlowDetailResponse extends SdkResponse {
    public name?: string;
    public region?: string;
    public sources?: Array<FlowSource>;
    public status?: string;
    private 'flow_id'?: string;
    public outputs?: Array<FlowOutput>;
    public constructor() { 
        super();
    }
    public withName(name: string): ShowFlowDetailResponse {
        this['name'] = name;
        return this;
    }
    public withRegion(region: string): ShowFlowDetailResponse {
        this['region'] = region;
        return this;
    }
    public withSources(sources: Array<FlowSource>): ShowFlowDetailResponse {
        this['sources'] = sources;
        return this;
    }
    public withStatus(status: string): ShowFlowDetailResponse {
        this['status'] = status;
        return this;
    }
    public withFlowId(flowId: string): ShowFlowDetailResponse {
        this['flow_id'] = flowId;
        return this;
    }
    public set flowId(flowId: string  | undefined) {
        this['flow_id'] = flowId;
    }
    public get flowId(): string | undefined {
        return this['flow_id'];
    }
    public withOutputs(outputs: Array<FlowOutput>): ShowFlowDetailResponse {
        this['outputs'] = outputs;
        return this;
    }
}