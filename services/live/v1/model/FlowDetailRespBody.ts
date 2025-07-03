import { FlowOutput } from './FlowOutput';
import { FlowSource } from './FlowSource';


export class FlowDetailRespBody {
    public name?: string;
    public region?: string;
    public sources?: Array<FlowSource>;
    public status?: string;
    private 'flow_id'?: string;
    public outputs?: Array<FlowOutput>;
    public constructor(name?: string, region?: string, sources?: Array<FlowSource>, status?: string, flowId?: string) { 
        this['name'] = name;
        this['region'] = region;
        this['sources'] = sources;
        this['status'] = status;
        this['flow_id'] = flowId;
    }
    public withName(name: string): FlowDetailRespBody {
        this['name'] = name;
        return this;
    }
    public withRegion(region: string): FlowDetailRespBody {
        this['region'] = region;
        return this;
    }
    public withSources(sources: Array<FlowSource>): FlowDetailRespBody {
        this['sources'] = sources;
        return this;
    }
    public withStatus(status: string): FlowDetailRespBody {
        this['status'] = status;
        return this;
    }
    public withFlowId(flowId: string): FlowDetailRespBody {
        this['flow_id'] = flowId;
        return this;
    }
    public set flowId(flowId: string  | undefined) {
        this['flow_id'] = flowId;
    }
    public get flowId(): string | undefined {
        return this['flow_id'];
    }
    public withOutputs(outputs: Array<FlowOutput>): FlowDetailRespBody {
        this['outputs'] = outputs;
        return this;
    }
}