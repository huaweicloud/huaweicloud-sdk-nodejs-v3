

export class MergeRequestDiff {
    private 'base_commit_sha'?: string;
    private 'commits_count'?: number;
    private 'created_at'?: string;
    private 'head_commit_sha'?: string;
    private 'merge_request_id'?: number;
    private 'start_commit_sha'?: string;
    private 'updated_at'?: string;
    public constructor() { 
    }
    public withBaseCommitSha(baseCommitSha: string): MergeRequestDiff {
        this['base_commit_sha'] = baseCommitSha;
        return this;
    }
    public set baseCommitSha(baseCommitSha: string  | undefined) {
        this['base_commit_sha'] = baseCommitSha;
    }
    public get baseCommitSha(): string | undefined {
        return this['base_commit_sha'];
    }
    public withCommitsCount(commitsCount: number): MergeRequestDiff {
        this['commits_count'] = commitsCount;
        return this;
    }
    public set commitsCount(commitsCount: number  | undefined) {
        this['commits_count'] = commitsCount;
    }
    public get commitsCount(): number | undefined {
        return this['commits_count'];
    }
    public withCreatedAt(createdAt: string): MergeRequestDiff {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withHeadCommitSha(headCommitSha: string): MergeRequestDiff {
        this['head_commit_sha'] = headCommitSha;
        return this;
    }
    public set headCommitSha(headCommitSha: string  | undefined) {
        this['head_commit_sha'] = headCommitSha;
    }
    public get headCommitSha(): string | undefined {
        return this['head_commit_sha'];
    }
    public withMergeRequestId(mergeRequestId: number): MergeRequestDiff {
        this['merge_request_id'] = mergeRequestId;
        return this;
    }
    public set mergeRequestId(mergeRequestId: number  | undefined) {
        this['merge_request_id'] = mergeRequestId;
    }
    public get mergeRequestId(): number | undefined {
        return this['merge_request_id'];
    }
    public withStartCommitSha(startCommitSha: string): MergeRequestDiff {
        this['start_commit_sha'] = startCommitSha;
        return this;
    }
    public set startCommitSha(startCommitSha: string  | undefined) {
        this['start_commit_sha'] = startCommitSha;
    }
    public get startCommitSha(): string | undefined {
        return this['start_commit_sha'];
    }
    public withUpdatedAt(updatedAt: string): MergeRequestDiff {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}