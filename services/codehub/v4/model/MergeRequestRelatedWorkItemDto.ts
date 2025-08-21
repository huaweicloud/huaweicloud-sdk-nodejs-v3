

export class MergeRequestRelatedWorkItemDto {
    public id?: number;
    private 'user_id'?: string;
    private 'repo_id'?: number;
    private 'merge_request_id'?: number;
    private 'target_branch'?: string;
    private 'source_branch'?: string;
    private 'merge_request_title'?: string;
    private 'merge_request_url'?: string;
    private 'merge_request_state'?: string;
    private 'related_id'?: string;
    private 'related_title'?: string;
    private 'related_url'?: string;
    public result?: number;
    public message?: string;
    private 'create_at'?: string;
    private 'update_at'?: string;
    public subject?: string;
    public tracker?: object;
    public status?: object;
    public constructor() { 
    }
    public withId(id: number): MergeRequestRelatedWorkItemDto {
        this['id'] = id;
        return this;
    }
    public withUserId(userId: string): MergeRequestRelatedWorkItemDto {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withRepoId(repoId: number): MergeRequestRelatedWorkItemDto {
        this['repo_id'] = repoId;
        return this;
    }
    public set repoId(repoId: number  | undefined) {
        this['repo_id'] = repoId;
    }
    public get repoId(): number | undefined {
        return this['repo_id'];
    }
    public withMergeRequestId(mergeRequestId: number): MergeRequestRelatedWorkItemDto {
        this['merge_request_id'] = mergeRequestId;
        return this;
    }
    public set mergeRequestId(mergeRequestId: number  | undefined) {
        this['merge_request_id'] = mergeRequestId;
    }
    public get mergeRequestId(): number | undefined {
        return this['merge_request_id'];
    }
    public withTargetBranch(targetBranch: string): MergeRequestRelatedWorkItemDto {
        this['target_branch'] = targetBranch;
        return this;
    }
    public set targetBranch(targetBranch: string  | undefined) {
        this['target_branch'] = targetBranch;
    }
    public get targetBranch(): string | undefined {
        return this['target_branch'];
    }
    public withSourceBranch(sourceBranch: string): MergeRequestRelatedWorkItemDto {
        this['source_branch'] = sourceBranch;
        return this;
    }
    public set sourceBranch(sourceBranch: string  | undefined) {
        this['source_branch'] = sourceBranch;
    }
    public get sourceBranch(): string | undefined {
        return this['source_branch'];
    }
    public withMergeRequestTitle(mergeRequestTitle: string): MergeRequestRelatedWorkItemDto {
        this['merge_request_title'] = mergeRequestTitle;
        return this;
    }
    public set mergeRequestTitle(mergeRequestTitle: string  | undefined) {
        this['merge_request_title'] = mergeRequestTitle;
    }
    public get mergeRequestTitle(): string | undefined {
        return this['merge_request_title'];
    }
    public withMergeRequestUrl(mergeRequestUrl: string): MergeRequestRelatedWorkItemDto {
        this['merge_request_url'] = mergeRequestUrl;
        return this;
    }
    public set mergeRequestUrl(mergeRequestUrl: string  | undefined) {
        this['merge_request_url'] = mergeRequestUrl;
    }
    public get mergeRequestUrl(): string | undefined {
        return this['merge_request_url'];
    }
    public withMergeRequestState(mergeRequestState: string): MergeRequestRelatedWorkItemDto {
        this['merge_request_state'] = mergeRequestState;
        return this;
    }
    public set mergeRequestState(mergeRequestState: string  | undefined) {
        this['merge_request_state'] = mergeRequestState;
    }
    public get mergeRequestState(): string | undefined {
        return this['merge_request_state'];
    }
    public withRelatedId(relatedId: string): MergeRequestRelatedWorkItemDto {
        this['related_id'] = relatedId;
        return this;
    }
    public set relatedId(relatedId: string  | undefined) {
        this['related_id'] = relatedId;
    }
    public get relatedId(): string | undefined {
        return this['related_id'];
    }
    public withRelatedTitle(relatedTitle: string): MergeRequestRelatedWorkItemDto {
        this['related_title'] = relatedTitle;
        return this;
    }
    public set relatedTitle(relatedTitle: string  | undefined) {
        this['related_title'] = relatedTitle;
    }
    public get relatedTitle(): string | undefined {
        return this['related_title'];
    }
    public withRelatedUrl(relatedUrl: string): MergeRequestRelatedWorkItemDto {
        this['related_url'] = relatedUrl;
        return this;
    }
    public set relatedUrl(relatedUrl: string  | undefined) {
        this['related_url'] = relatedUrl;
    }
    public get relatedUrl(): string | undefined {
        return this['related_url'];
    }
    public withResult(result: number): MergeRequestRelatedWorkItemDto {
        this['result'] = result;
        return this;
    }
    public withMessage(message: string): MergeRequestRelatedWorkItemDto {
        this['message'] = message;
        return this;
    }
    public withCreateAt(createAt: string): MergeRequestRelatedWorkItemDto {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: string  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): string | undefined {
        return this['create_at'];
    }
    public withUpdateAt(updateAt: string): MergeRequestRelatedWorkItemDto {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: string  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): string | undefined {
        return this['update_at'];
    }
    public withSubject(subject: string): MergeRequestRelatedWorkItemDto {
        this['subject'] = subject;
        return this;
    }
    public withTracker(tracker: object): MergeRequestRelatedWorkItemDto {
        this['tracker'] = tracker;
        return this;
    }
    public withStatus(status: object): MergeRequestRelatedWorkItemDto {
        this['status'] = status;
        return this;
    }
}