import { ListGraphsRespGraphs } from './ListGraphsRespGraphs';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGraphs2Response extends SdkResponse {
    private 'graph_count'?: number | undefined;
    public graphs?: Array<ListGraphsRespGraphs>;
    public constructor() { 
        super();
    }
    public withGraphCount(graphCount: number): ListGraphs2Response {
        this['graph_count'] = graphCount;
        return this;
    }
    public set graphCount(graphCount: number | undefined) {
        this['graph_count'] = graphCount;
    }
    public get graphCount() {
        return this['graph_count'];
    }
    public withGraphs(graphs: Array<ListGraphsRespGraphs>): ListGraphs2Response {
        this['graphs'] = graphs;
        return this;
    }
}