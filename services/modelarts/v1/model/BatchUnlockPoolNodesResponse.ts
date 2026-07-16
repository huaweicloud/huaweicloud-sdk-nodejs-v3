import { NodesResultMsg } from './NodesResultMsg';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchUnlockPoolNodesResponse extends SdkResponse {
    public nodes?: Array<NodesResultMsg>;
    public constructor() { 
        super();
    }
    public withNodes(nodes: Array<NodesResultMsg>): BatchUnlockPoolNodesResponse {
        this['nodes'] = nodes;
        return this;
    }
}