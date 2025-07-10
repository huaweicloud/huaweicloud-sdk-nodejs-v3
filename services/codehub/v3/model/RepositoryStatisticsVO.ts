

export class RepositoryStatisticsVO {
    public repoName?: string;
    public commitCount?: number;
    public repoSize?: string;
    public lastCommitTime?: string;
    public codeLines?: number;
    public branchCount?: number;
    public archiveUrl?: string;
    public constructor() { 
    }
    public withRepoName(repoName: string): RepositoryStatisticsVO {
        this['repoName'] = repoName;
        return this;
    }
    public withCommitCount(commitCount: number): RepositoryStatisticsVO {
        this['commitCount'] = commitCount;
        return this;
    }
    public withRepoSize(repoSize: string): RepositoryStatisticsVO {
        this['repoSize'] = repoSize;
        return this;
    }
    public withLastCommitTime(lastCommitTime: string): RepositoryStatisticsVO {
        this['lastCommitTime'] = lastCommitTime;
        return this;
    }
    public withCodeLines(codeLines: number): RepositoryStatisticsVO {
        this['codeLines'] = codeLines;
        return this;
    }
    public withBranchCount(branchCount: number): RepositoryStatisticsVO {
        this['branchCount'] = branchCount;
        return this;
    }
    public withArchiveUrl(archiveUrl: string): RepositoryStatisticsVO {
        this['archiveUrl'] = archiveUrl;
        return this;
    }
}