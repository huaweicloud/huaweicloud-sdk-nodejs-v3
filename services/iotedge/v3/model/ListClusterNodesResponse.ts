import { QueryNodeResp } from './QueryNodeResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClusterNodesResponse extends SdkResponse {
    public nodes?: Array<QueryNodeResp>;
    public constructor() { 
        super();
    }
    public withNodes(nodes: Array<QueryNodeResp>): ListClusterNodesResponse {
        this['nodes'] = nodes;
        return this;
    }
}