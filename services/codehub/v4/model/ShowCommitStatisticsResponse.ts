import { CommitStatisticsResultCommitDto } from './CommitStatisticsResultCommitDto';
import { StatisticDto } from './StatisticDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCommitStatisticsResponse extends SdkResponse {
    public commits?: Array<CommitStatisticsResultCommitDto>;
    public statistics?: Array<StatisticDto>;
    public total?: number;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withCommits(commits: Array<CommitStatisticsResultCommitDto>): ShowCommitStatisticsResponse {
        this['commits'] = commits;
        return this;
    }
    public withStatistics(statistics: Array<StatisticDto>): ShowCommitStatisticsResponse {
        this['statistics'] = statistics;
        return this;
    }
    public withTotal(total: number): ShowCommitStatisticsResponse {
        this['total'] = total;
        return this;
    }
    public withXTotal(xTotal: string): ShowCommitStatisticsResponse {
        this['X-Total'] = xTotal;
        return this;
    }
    public set xTotal(xTotal: string  | undefined) {
        this['X-Total'] = xTotal;
    }
    public get xTotal(): string | undefined {
        return this['X-Total'];
    }
}