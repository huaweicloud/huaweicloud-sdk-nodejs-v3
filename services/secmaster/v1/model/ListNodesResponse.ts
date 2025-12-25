import { Node } from './Node';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNodesResponse extends SdkResponse {
    public count?: number;
    public records?: Array<Node>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListNodesResponse {
        this['count'] = count;
        return this;
    }
    public withRecords(records: Array<Node>): ListNodesResponse {
        this['records'] = records;
        return this;
    }
}