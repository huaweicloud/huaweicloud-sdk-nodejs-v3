import { NodeContextEntity } from './NodeContextEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceNodesResponse extends SdkResponse {
    public nodes?: Array<NodeContextEntity>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withNodes(nodes: Array<NodeContextEntity>): ShowInstanceNodesResponse {
        this['nodes'] = nodes;
        return this;
    }
    public withTotal(total: number): ShowInstanceNodesResponse {
        this['total'] = total;
        return this;
    }
}