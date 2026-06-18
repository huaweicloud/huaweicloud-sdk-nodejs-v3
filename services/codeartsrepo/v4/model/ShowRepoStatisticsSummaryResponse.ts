
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRepoStatisticsSummaryResponse extends SdkResponse {
    private 'repo_name'?: string;
    private 'commit_count'?: number;
    private 'repo_size'?: string;
    private 'last_commit_time'?: string;
    private 'code_lines'?: number;
    private 'branch_count'?: number;
    public constructor() { 
        super();
    }
    public withRepoName(repoName: string): ShowRepoStatisticsSummaryResponse {
        this['repo_name'] = repoName;
        return this;
    }
    public set repoName(repoName: string  | undefined) {
        this['repo_name'] = repoName;
    }
    public get repoName(): string | undefined {
        return this['repo_name'];
    }
    public withCommitCount(commitCount: number): ShowRepoStatisticsSummaryResponse {
        this['commit_count'] = commitCount;
        return this;
    }
    public set commitCount(commitCount: number  | undefined) {
        this['commit_count'] = commitCount;
    }
    public get commitCount(): number | undefined {
        return this['commit_count'];
    }
    public withRepoSize(repoSize: string): ShowRepoStatisticsSummaryResponse {
        this['repo_size'] = repoSize;
        return this;
    }
    public set repoSize(repoSize: string  | undefined) {
        this['repo_size'] = repoSize;
    }
    public get repoSize(): string | undefined {
        return this['repo_size'];
    }
    public withLastCommitTime(lastCommitTime: string): ShowRepoStatisticsSummaryResponse {
        this['last_commit_time'] = lastCommitTime;
        return this;
    }
    public set lastCommitTime(lastCommitTime: string  | undefined) {
        this['last_commit_time'] = lastCommitTime;
    }
    public get lastCommitTime(): string | undefined {
        return this['last_commit_time'];
    }
    public withCodeLines(codeLines: number): ShowRepoStatisticsSummaryResponse {
        this['code_lines'] = codeLines;
        return this;
    }
    public set codeLines(codeLines: number  | undefined) {
        this['code_lines'] = codeLines;
    }
    public get codeLines(): number | undefined {
        return this['code_lines'];
    }
    public withBranchCount(branchCount: number): ShowRepoStatisticsSummaryResponse {
        this['branch_count'] = branchCount;
        return this;
    }
    public set branchCount(branchCount: number  | undefined) {
        this['branch_count'] = branchCount;
    }
    public get branchCount(): number | undefined {
        return this['branch_count'];
    }
}