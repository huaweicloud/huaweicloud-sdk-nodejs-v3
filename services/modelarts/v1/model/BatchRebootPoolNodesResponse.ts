import { BatchRebootPoolNodesRequestBody } from './BatchRebootPoolNodesRequestBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchRebootPoolNodesResponse extends SdkResponse {
    public nodeNames?: Array<string>;
    public constructor(nodeNames?: Array<string>) { 
        super();
        this['nodeNames'] = nodeNames;
    }
    public withNodeNames(nodeNames: Array<string>): BatchRebootPoolNodesResponse {
        this['nodeNames'] = nodeNames;
        return this;
    }
}