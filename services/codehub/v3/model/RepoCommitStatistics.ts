import { RepoDailyCodeline } from './RepoDailyCodeline';
import { RepoStatistics } from './RepoStatistics';
import { RepoStatisticsEvent } from './RepoStatisticsEvent';


export class RepoCommitStatistics {
    private 'all_branch_commits_count'?: number;
    public codelines?: Array<RepoDailyCodeline>;
    public count?: number;
    public event?: RepoStatisticsEvent;
    public statistics?: Array<RepoStatistics>;
    public total?: number;
    public constructor() { 
    }
    public withAllBranchCommitsCount(allBranchCommitsCount: number): RepoCommitStatistics {
        this['all_branch_commits_count'] = allBranchCommitsCount;
        return this;
    }
    public set allBranchCommitsCount(allBranchCommitsCount: number  | undefined) {
        this['all_branch_commits_count'] = allBranchCommitsCount;
    }
    public get allBranchCommitsCount(): number | undefined {
        return this['all_branch_commits_count'];
    }
    public withCodelines(codelines: Array<RepoDailyCodeline>): RepoCommitStatistics {
        this['codelines'] = codelines;
        return this;
    }
    public withCount(count: number): RepoCommitStatistics {
        this['count'] = count;
        return this;
    }
    public withEvent(event: RepoStatisticsEvent): RepoCommitStatistics {
        this['event'] = event;
        return this;
    }
    public withStatistics(statistics: Array<RepoStatistics>): RepoCommitStatistics {
        this['statistics'] = statistics;
        return this;
    }
    public withTotal(total: number): RepoCommitStatistics {
        this['total'] = total;
        return this;
    }
}