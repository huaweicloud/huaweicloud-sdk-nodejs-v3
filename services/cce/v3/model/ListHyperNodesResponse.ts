import { HyperNode } from './HyperNode';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHyperNodesResponse extends SdkResponse {
    public body?: Array<HyperNode>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<HyperNode>): ListHyperNodesResponse {
        this['body'] = body;
        return this;
    }
}