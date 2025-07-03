import { ModifyFlowSourcesRequestBody } from './ModifyFlowSourcesRequestBody';


export class ModifyFlowSourcesRequest {
    private 'flow_id'?: string;
    private 'source_name'?: string;
    public body?: ModifyFlowSourcesRequestBody;
    public constructor(flowId?: string, sourceName?: string) { 
        this['flow_id'] = flowId;
        this['source_name'] = sourceName;
    }
    public withFlowId(flowId: string): ModifyFlowSourcesRequest {
        this['flow_id'] = flowId;
        return this;
    }
    public set flowId(flowId: string  | undefined) {
        this['flow_id'] = flowId;
    }
    public get flowId(): string | undefined {
        return this['flow_id'];
    }
    public withSourceName(sourceName: string): ModifyFlowSourcesRequest {
        this['source_name'] = sourceName;
        return this;
    }
    public set sourceName(sourceName: string  | undefined) {
        this['source_name'] = sourceName;
    }
    public get sourceName(): string | undefined {
        return this['source_name'];
    }
    public withBody(body: ModifyFlowSourcesRequestBody): ModifyFlowSourcesRequest {
        this['body'] = body;
        return this;
    }
}