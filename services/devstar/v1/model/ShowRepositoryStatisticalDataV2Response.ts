
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRepositoryStatisticalDataV2Response extends SdkResponse {
    public name?: string;
    private 'commit_number'?: number | undefined;
    private 'git_repo_cap'?: string | undefined;
    private 'last_commit_time'?: string | undefined;
    private 'code_lines'?: number | undefined;
    private 'branch_number'?: number | undefined;
    private 'detail_url'?: string | undefined;
    private 'download_url'?: string | undefined;
    public constructor() { 
        super();
    }
    public withName(name: string): ShowRepositoryStatisticalDataV2Response {
        this['name'] = name;
        return this;
    }
    public withCommitNumber(commitNumber: number): ShowRepositoryStatisticalDataV2Response {
        this['commit_number'] = commitNumber;
        return this;
    }
    public set commitNumber(commitNumber: number | undefined) {
        this['commit_number'] = commitNumber;
    }
    public get commitNumber() {
        return this['commit_number'];
    }
    public withGitRepoCap(gitRepoCap: string): ShowRepositoryStatisticalDataV2Response {
        this['git_repo_cap'] = gitRepoCap;
        return this;
    }
    public set gitRepoCap(gitRepoCap: string | undefined) {
        this['git_repo_cap'] = gitRepoCap;
    }
    public get gitRepoCap() {
        return this['git_repo_cap'];
    }
    public withLastCommitTime(lastCommitTime: string): ShowRepositoryStatisticalDataV2Response {
        this['last_commit_time'] = lastCommitTime;
        return this;
    }
    public set lastCommitTime(lastCommitTime: string | undefined) {
        this['last_commit_time'] = lastCommitTime;
    }
    public get lastCommitTime() {
        return this['last_commit_time'];
    }
    public withCodeLines(codeLines: number): ShowRepositoryStatisticalDataV2Response {
        this['code_lines'] = codeLines;
        return this;
    }
    public set codeLines(codeLines: number | undefined) {
        this['code_lines'] = codeLines;
    }
    public get codeLines() {
        return this['code_lines'];
    }
    public withBranchNumber(branchNumber: number): ShowRepositoryStatisticalDataV2Response {
        this['branch_number'] = branchNumber;
        return this;
    }
    public set branchNumber(branchNumber: number | undefined) {
        this['branch_number'] = branchNumber;
    }
    public get branchNumber() {
        return this['branch_number'];
    }
    public withDetailUrl(detailUrl: string): ShowRepositoryStatisticalDataV2Response {
        this['detail_url'] = detailUrl;
        return this;
    }
    public set detailUrl(detailUrl: string | undefined) {
        this['detail_url'] = detailUrl;
    }
    public get detailUrl() {
        return this['detail_url'];
    }
    public withDownloadUrl(downloadUrl: string): ShowRepositoryStatisticalDataV2Response {
        this['download_url'] = downloadUrl;
        return this;
    }
    public set downloadUrl(downloadUrl: string | undefined) {
        this['download_url'] = downloadUrl;
    }
    public get downloadUrl() {
        return this['download_url'];
    }
}