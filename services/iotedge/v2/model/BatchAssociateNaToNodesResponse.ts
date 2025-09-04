import { QueryAuthorizedNodeDTO } from './QueryAuthorizedNodeDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchAssociateNaToNodesResponse extends SdkResponse {
    public nodes?: Array<QueryAuthorizedNodeDTO>;
    public constructor() { 
        super();
    }
    public withNodes(nodes: Array<QueryAuthorizedNodeDTO>): BatchAssociateNaToNodesResponse {
        this['nodes'] = nodes;
        return this;
    }
}