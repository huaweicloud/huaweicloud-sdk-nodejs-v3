import { HyperNode } from './HyperNode';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHyperNodesResponse extends SdkResponse {
    public hyperNodeList?: Array<HyperNode>;
    public constructor() { 
        super();
    }
    public withHyperNodeList(hyperNodeList: Array<HyperNode>): ListHyperNodesResponse {
        this['hyperNodeList'] = hyperNodeList;
        return this;
    }
}