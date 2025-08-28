import { NodeList } from './NodeList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNodesResponse extends SdkResponse {
    public nodes?: Array<NodeList>;
    public offset?: number;
    public limit?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withNodes(nodes: Array<NodeList>): ListNodesResponse {
        this['nodes'] = nodes;
        return this;
    }
    public withOffset(offset: number): ListNodesResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListNodesResponse {
        this['limit'] = limit;
        return this;
    }
    public withTotal(total: number): ListNodesResponse {
        this['total'] = total;
        return this;
    }
}