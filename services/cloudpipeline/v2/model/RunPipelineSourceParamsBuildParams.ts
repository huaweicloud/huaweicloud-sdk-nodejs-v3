

export class RunPipelineSourceParamsBuildParams {
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
    public constructor() { 
    }
    public withAction(action: string): RunPipelineSourceParamsBuildParams {
        this['action'] = action;
        return this;
    }
    public withBuildType(buildType: string): RunPipelineSourceParamsBuildParams {
        this['build_type'] = buildType;
        return this;
    }
    public set buildType(buildType: string  | undefined) {
        this['build_type'] = buildType;
    }
    public get buildType(): string | undefined {
        return this['build_type'];
    }
    public withCommitId(commitId: string): RunPipelineSourceParamsBuildParams {
        this['commit_id'] = commitId;
        return this;
    }
    public set commitId(commitId: string  | undefined) {
        this['commit_id'] = commitId;
    }
    public get commitId(): string | undefined {
        return this['commit_id'];
    }
    public withEventType(eventType: string): RunPipelineSourceParamsBuildParams {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): string | undefined {
        return this['event_type'];
    }
    public withMergeId(mergeId: string): RunPipelineSourceParamsBuildParams {
        this['merge_id'] = mergeId;
        return this;
    }
    public set mergeId(mergeId: string  | undefined) {
        this['merge_id'] = mergeId;
    }
    public get mergeId(): string | undefined {
        return this['merge_id'];
    }
    public withMessage(message: string): RunPipelineSourceParamsBuildParams {
        this['message'] = message;
        return this;
    }
    public withSourceBranch(sourceBranch: string): RunPipelineSourceParamsBuildParams {
        this['source_branch'] = sourceBranch;
        return this;
    }
    public set sourceBranch(sourceBranch: string  | undefined) {
        this['source_branch'] = sourceBranch;
    }
    public get sourceBranch(): string | undefined {
        return this['source_branch'];
    }
    public withTag(tag: string): RunPipelineSourceParamsBuildParams {
        this['tag'] = tag;
        return this;
    }
    public withTargetBranch(targetBranch: string): RunPipelineSourceParamsBuildParams {
        this['target_branch'] = targetBranch;
        return this;
    }
    public set targetBranch(targetBranch: string  | undefined) {
        this['target_branch'] = targetBranch;
    }
    public get targetBranch(): string | undefined {
        return this['target_branch'];
    }
    public withCodehubId(codehubId: string): RunPipelineSourceParamsBuildParams {
        this['codehub_id'] = codehubId;
        return this;
    }
    public set codehubId(codehubId: string  | undefined) {
        this['codehub_id'] = codehubId;
    }
    public get codehubId(): string | undefined {
        return this['codehub_id'];
    }
}