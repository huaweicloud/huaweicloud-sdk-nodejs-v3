import { CodelineDto } from './CodelineDto';
import { StatisticDto } from './StatisticDto';
import { StatisticEventsDto } from './StatisticEventsDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRepoLastStatisticsResponse extends SdkResponse {
    public event?: StatisticEventsDto;
    public total?: number;
    public statistics?: Array<StatisticDto>;
    public codelines?: Array<CodelineDto>;
    public count?: number;
    private 'all_branch_commits_count'?: number;
    public constructor() { 
        super();
    }
    public withEvent(event: StatisticEventsDto): ShowRepoLastStatisticsResponse {
        this['event'] = event;
        return this;
    }
    public withTotal(total: number): ShowRepoLastStatisticsResponse {
        this['total'] = total;
        return this;
    }
    public withStatistics(statistics: Array<StatisticDto>): ShowRepoLastStatisticsResponse {
        this['statistics'] = statistics;
        return this;
    }
    public withCodelines(codelines: Array<CodelineDto>): ShowRepoLastStatisticsResponse {
        this['codelines'] = codelines;
        return this;
    }
    public withCount(count: number): ShowRepoLastStatisticsResponse {
        this['count'] = count;
        return this;
    }
    public withAllBranchCommitsCount(allBranchCommitsCount: number): ShowRepoLastStatisticsResponse {
        this['all_branch_commits_count'] = allBranchCommitsCount;
        return this;
    }
    public set allBranchCommitsCount(allBranchCommitsCount: number  | undefined) {
        this['all_branch_commits_count'] = allBranchCommitsCount;
    }
    public get allBranchCommitsCount(): number | undefined {
        return this['all_branch_commits_count'];
    }
}