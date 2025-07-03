import { FlowSource } from './FlowSource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ModifyFlowSourcesResponse extends SdkResponse {
    private 'flow_id'?: string;
    public source?: FlowSource;
    public constructor() { 
        super();
    }
    public withFlowId(flowId: string): ModifyFlowSourcesResponse {
        this['flow_id'] = flowId;
        return this;
    }
    public set flowId(flowId: string  | undefined) {
        this['flow_id'] = flowId;
    }
    public get flowId(): string | undefined {
        return this['flow_id'];
    }
    public withSource(source: FlowSource): ModifyFlowSourcesResponse {
        this['source'] = source;
        return this;
    }
}