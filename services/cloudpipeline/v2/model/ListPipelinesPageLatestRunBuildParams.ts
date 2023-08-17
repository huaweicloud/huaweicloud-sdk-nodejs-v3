

export class ListPipelinesPageLatestRunBuildParams {
    public action?: string;
    private 'build_type'?: string;
    private 'commit_id'?: string;
    private 'event_type'?: string;
    private 'merge_id'?: string;
    public message?: string;
    private 'source_branch'?: string;
    public tag?: string;
    private 'target_branch'?: string;
    private 'codehub_id'?: string;
    private 'git_url'?: string;
    public constructor() { 
    }
    public withAction(action: string): ListPipelinesPageLatestRunBuildParams {
        this['action'] = action;
        return this;
    }
    public withBuildType(buildType: string): ListPipelinesPageLatestRunBuildParams {
        this['build_type'] = buildType;
        return this;
    }
    public set buildType(buildType: string  | undefined) {
        this['build_type'] = buildType;
    }
    public get buildType(): string | undefined {
        return this['build_type'];
    }
    public withCommitId(commitId: string): ListPipelinesPageLatestRunBuildParams {
        this['commit_id'] = commitId;
        return this;
    }
    public set commitId(commitId: string  | undefined) {
        this['commit_id'] = commitId;
    }
    public get commitId(): string | undefined {
        return this['commit_id'];
    }
    public withEventType(eventType: string): ListPipelinesPageLatestRunBuildParams {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): string | undefined {
        return this['event_type'];
    }
    public withMergeId(mergeId: string): ListPipelinesPageLatestRunBuildParams {
        this['merge_id'] = mergeId;
        return this;
    }
    public set mergeId(mergeId: string  | undefined) {
        this['merge_id'] = mergeId;
    }
    public get mergeId(): string | undefined {
        return this['merge_id'];
    }
    public withMessage(message: string): ListPipelinesPageLatestRunBuildParams {
        this['message'] = message;
        return this;
    }
    public withSourceBranch(sourceBranch: string): ListPipelinesPageLatestRunBuildParams {
        this['source_branch'] = sourceBranch;
        return this;
    }
    public set sourceBranch(sourceBranch: string  | undefined) {
        this['source_branch'] = sourceBranch;
    }
    public get sourceBranch(): string | undefined {
        return this['source_branch'];
    }
    public withTag(tag: string): ListPipelinesPageLatestRunBuildParams {
        this['tag'] = tag;
        return this;
    }
    public withTargetBranch(targetBranch: string): ListPipelinesPageLatestRunBuildParams {
        this['target_branch'] = targetBranch;
        return this;
    }
    public set targetBranch(targetBranch: string  | undefined) {
        this['target_branch'] = targetBranch;
    }
    public get targetBranch(): string | undefined {
        return this['target_branch'];
    }
    public withCodehubId(codehubId: string): ListPipelinesPageLatestRunBuildParams {
        this['codehub_id'] = codehubId;
        return this;
    }
    public set codehubId(codehubId: string  | undefined) {
        this['codehub_id'] = codehubId;
    }
    public get codehubId(): string | undefined {
        return this['codehub_id'];
    }
    public withGitUrl(gitUrl: string): ListPipelinesPageLatestRunBuildParams {
        this['git_url'] = gitUrl;
        return this;
    }
    public set gitUrl(gitUrl: string  | undefined) {
        this['git_url'] = gitUrl;
    }
    public get gitUrl(): string | undefined {
        return this['git_url'];
    }
}