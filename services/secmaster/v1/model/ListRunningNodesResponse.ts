import { ComponentConfiguration } from './ComponentConfiguration';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRunningNodesResponse extends SdkResponse {
    public count?: number;
    public records?: Array<ComponentConfiguration>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListRunningNodesResponse {
        this['count'] = count;
        return this;
    }
    public withRecords(records: Array<ComponentConfiguration>): ListRunningNodesResponse {
        this['records'] = records;
        return this;
    }
}