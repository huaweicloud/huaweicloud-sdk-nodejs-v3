import { ShowKeyUsageFlowResponseBodyEdges } from './ShowKeyUsageFlowResponseBodyEdges';
import { ShowKeyUsageFlowResponseBodyNodes } from './ShowKeyUsageFlowResponseBodyNodes';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKeyUsageFlowResponse extends SdkResponse {
    public nodes?: Array<ShowKeyUsageFlowResponseBodyNodes>;
    public edges?: Array<ShowKeyUsageFlowResponseBodyEdges>;
    public constructor() { 
        super();
    }
    public withNodes(nodes: Array<ShowKeyUsageFlowResponseBodyNodes>): ShowKeyUsageFlowResponse {
        this['nodes'] = nodes;
        return this;
    }
    public withEdges(edges: Array<ShowKeyUsageFlowResponseBodyEdges>): ShowKeyUsageFlowResponse {
        this['edges'] = edges;
        return this;
    }
}