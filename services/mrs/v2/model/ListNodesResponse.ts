import { ClusterNode } from './ClusterNode';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNodesResponse extends SdkResponse {
    public nodes?: Array<ClusterNode>;
    private 'node_total'?: number;
    public constructor() { 
        super();
    }
    public withNodes(nodes: Array<ClusterNode>): ListNodesResponse {
        this['nodes'] = nodes;
        return this;
    }
    public withNodeTotal(nodeTotal: number): ListNodesResponse {
        this['node_total'] = nodeTotal;
        return this;
    }
    public set nodeTotal(nodeTotal: number  | undefined) {
        this['node_total'] = nodeTotal;
    }
    public get nodeTotal(): number | undefined {
        return this['node_total'];
    }
}