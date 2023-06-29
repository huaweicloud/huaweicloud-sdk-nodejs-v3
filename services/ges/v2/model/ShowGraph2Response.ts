import { ShowGraphRespGraph } from './ShowGraphRespGraph';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGraph2Response extends SdkResponse {
    public graph?: ShowGraphRespGraph;
    public constructor() { 
        super();
    }
    public withGraph(graph: ShowGraphRespGraph): ShowGraph2Response {
        this['graph'] = graph;
        return this;
    }
}