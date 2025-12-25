import { CollectorNode } from './CollectorNode';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCollectorNodeResponse extends SdkResponse {
    public count?: number;
    public records?: Array<CollectorNode>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListCollectorNodeResponse {
        this['count'] = count;
        return this;
    }
    public withRecords(records: Array<CollectorNode>): ListCollectorNodeResponse {
        this['records'] = records;
        return this;
    }
}