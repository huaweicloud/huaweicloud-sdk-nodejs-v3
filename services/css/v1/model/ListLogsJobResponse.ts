import { ClusterLogRecord } from './ClusterLogRecord';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLogsJobResponse extends SdkResponse {
    public clusterLogRecord?: Array<ClusterLogRecord>;
    public constructor() { 
        super();
    }
    public withClusterLogRecord(clusterLogRecord: Array<ClusterLogRecord>): ListLogsJobResponse {
        this['clusterLogRecord'] = clusterLogRecord;
        return this;
    }
}