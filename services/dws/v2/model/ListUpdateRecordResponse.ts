import { ClusterUpdateRecordResp } from './ClusterUpdateRecordResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUpdateRecordResponse extends SdkResponse {
    public count?: number;
    public records?: Array<ClusterUpdateRecordResp>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListUpdateRecordResponse {
        this['count'] = count;
        return this;
    }
    public withRecords(records: Array<ClusterUpdateRecordResp>): ListUpdateRecordResponse {
        this['records'] = records;
        return this;
    }
}