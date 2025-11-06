

export class MergeRequestDiffExternalDto {
    public id?: number;
    public state?: string;
    private 'merge_request_id'?: number;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'base_commit_sha'?: string;
    private 'real_size'?: string;
    private 'head_commit_sha'?: string;
    private 'start_commit_sha'?: string;
    private 'commits_count'?: number;
    private 'external_diff'?: string;
    private 'external_diff_store'?: number;
    private 'stored_externally'?: boolean;
    private 'added_lines'?: number;
    private 'removed_lines'?: number;
    public constructor() { 
    }
    public withId(id: number): MergeRequestDiffExternalDto {
        this['id'] = id;
        return this;
    }
    public withState(state: string): MergeRequestDiffExternalDto {
        this['state'] = state;
        return this;
    }
    public withMergeRequestId(mergeRequestId: number): MergeRequestDiffExternalDto {
        this['merge_request_id'] = mergeRequestId;
        return this;
    }
    public set mergeRequestId(mergeRequestId: number  | undefined) {
        this['merge_request_id'] = mergeRequestId;
    }
    public get mergeRequestId(): number | undefined {
        return this['merge_request_id'];
    }
    public withCreatedAt(createdAt: string): MergeRequestDiffExternalDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): MergeRequestDiffExternalDto {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withBaseCommitSha(baseCommitSha: string): MergeRequestDiffExternalDto {
        this['base_commit_sha'] = baseCommitSha;
        return this;
    }
    public set baseCommitSha(baseCommitSha: string  | undefined) {
        this['base_commit_sha'] = baseCommitSha;
    }
    public get baseCommitSha(): string | undefined {
        return this['base_commit_sha'];
    }
    public withRealSize(realSize: string): MergeRequestDiffExternalDto {
        this['real_size'] = realSize;
        return this;
    }
    public set realSize(realSize: string  | undefined) {
        this['real_size'] = realSize;
    }
    public get realSize(): string | undefined {
        return this['real_size'];
    }
    public withHeadCommitSha(headCommitSha: string): MergeRequestDiffExternalDto {
        this['head_commit_sha'] = headCommitSha;
        return this;
    }
    public set headCommitSha(headCommitSha: string  | undefined) {
        this['head_commit_sha'] = headCommitSha;
    }
    public get headCommitSha(): string | undefined {
        return this['head_commit_sha'];
    }
    public withStartCommitSha(startCommitSha: string): MergeRequestDiffExternalDto {
        this['start_commit_sha'] = startCommitSha;
        return this;
    }
    public set startCommitSha(startCommitSha: string  | undefined) {
        this['start_commit_sha'] = startCommitSha;
    }
    public get startCommitSha(): string | undefined {
        return this['start_commit_sha'];
    }
    public withCommitsCount(commitsCount: number): MergeRequestDiffExternalDto {
        this['commits_count'] = commitsCount;
        return this;
    }
    public set commitsCount(commitsCount: number  | undefined) {
        this['commits_count'] = commitsCount;
    }
    public get commitsCount(): number | undefined {
        return this['commits_count'];
    }
    public withExternalDiff(externalDiff: string): MergeRequestDiffExternalDto {
        this['external_diff'] = externalDiff;
        return this;
    }
    public set externalDiff(externalDiff: string  | undefined) {
        this['external_diff'] = externalDiff;
    }
    public get externalDiff(): string | undefined {
        return this['external_diff'];
    }
    public withExternalDiffStore(externalDiffStore: number): MergeRequestDiffExternalDto {
        this['external_diff_store'] = externalDiffStore;
        return this;
    }
    public set externalDiffStore(externalDiffStore: number  | undefined) {
        this['external_diff_store'] = externalDiffStore;
    }
    public get externalDiffStore(): number | undefined {
        return this['external_diff_store'];
    }
    public withStoredExternally(storedExternally: boolean): MergeRequestDiffExternalDto {
        this['stored_externally'] = storedExternally;
        return this;
    }
    public set storedExternally(storedExternally: boolean  | undefined) {
        this['stored_externally'] = storedExternally;
    }
    public get storedExternally(): boolean | undefined {
        return this['stored_externally'];
    }
    public withAddedLines(addedLines: number): MergeRequestDiffExternalDto {
        this['added_lines'] = addedLines;
        return this;
    }
    public set addedLines(addedLines: number  | undefined) {
        this['added_lines'] = addedLines;
    }
    public get addedLines(): number | undefined {
        return this['added_lines'];
    }
    public withRemovedLines(removedLines: number): MergeRequestDiffExternalDto {
        this['removed_lines'] = removedLines;
        return this;
    }
    public set removedLines(removedLines: number  | undefined) {
        this['removed_lines'] = removedLines;
    }
    public get removedLines(): number | undefined {
        return this['removed_lines'];
    }
}