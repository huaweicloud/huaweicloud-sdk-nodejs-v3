import { SnapshotsStatistic } from './SnapshotsStatistic';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSnapshotStatisticsResponse extends SdkResponse {
    public statistics?: Array<SnapshotsStatistic>;
    public constructor() { 
        super();
    }
    public withStatistics(statistics: Array<SnapshotsStatistic>): ListSnapshotStatisticsResponse {
        this['statistics'] = statistics;
        return this;
    }
}