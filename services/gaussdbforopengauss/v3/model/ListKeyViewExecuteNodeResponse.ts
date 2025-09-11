import { OpsKeyViewExecuteNodeResult } from './OpsKeyViewExecuteNodeResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListKeyViewExecuteNodeResponse extends SdkResponse {
    public nodes?: Array<OpsKeyViewExecuteNodeResult>;
    public constructor() { 
        super();
    }
    public withNodes(nodes: Array<OpsKeyViewExecuteNodeResult>): ListKeyViewExecuteNodeResponse {
        this['nodes'] = nodes;
        return this;
    }
}