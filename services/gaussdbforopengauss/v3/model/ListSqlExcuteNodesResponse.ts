import { ExcuteSQLNodeInfoResult } from './ExcuteSQLNodeInfoResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSqlExcuteNodesResponse extends SdkResponse {
    public nodes?: Array<ExcuteSQLNodeInfoResult>;
    public constructor() { 
        super();
    }
    public withNodes(nodes: Array<ExcuteSQLNodeInfoResult>): ListSqlExcuteNodesResponse {
        this['nodes'] = nodes;
        return this;
    }
}