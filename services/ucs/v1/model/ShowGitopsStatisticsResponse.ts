import { ClusterReconcileStatus } from './ClusterReconcileStatus';
import { OverviewReconcileStatus } from './OverviewReconcileStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGitopsStatisticsResponse extends SdkResponse {
    public overviewStatus?: OverviewReconcileStatus;
    public items?: Array<ClusterReconcileStatus>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withOverviewStatus(overviewStatus: OverviewReconcileStatus): ShowGitopsStatisticsResponse {
        this['overviewStatus'] = overviewStatus;
        return this;
    }
    public withItems(items: Array<ClusterReconcileStatus>): ShowGitopsStatisticsResponse {
        this['items'] = items;
        return this;
    }
    public withTotal(total: number): ShowGitopsStatisticsResponse {
        this['total'] = total;
        return this;
    }
}