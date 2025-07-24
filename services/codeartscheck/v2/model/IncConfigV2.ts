

export class IncConfigV2 {
    private 'parent_task_id'?: string;
    private 'git_source_branch'?: string;
    private 'git_target_branch'?: string;
    private 'merge_id'?: string;
    private 'event_type'?: string;
    public action?: string;
    public title?: string;
    public constructor() { 
    }
    public withParentTaskId(parentTaskId: string): IncConfigV2 {
        this['parent_task_id'] = parentTaskId;
        return this;
    }
    public set parentTaskId(parentTaskId: string  | undefined) {
        this['parent_task_id'] = parentTaskId;
    }
    public get parentTaskId(): string | undefined {
        return this['parent_task_id'];
    }
    public withGitSourceBranch(gitSourceBranch: string): IncConfigV2 {
        this['git_source_branch'] = gitSourceBranch;
        return this;
    }
    public set gitSourceBranch(gitSourceBranch: string  | undefined) {
        this['git_source_branch'] = gitSourceBranch;
    }
    public get gitSourceBranch(): string | undefined {
        return this['git_source_branch'];
    }
    public withGitTargetBranch(gitTargetBranch: string): IncConfigV2 {
        this['git_target_branch'] = gitTargetBranch;
        return this;
    }
    public set gitTargetBranch(gitTargetBranch: string  | undefined) {
        this['git_target_branch'] = gitTargetBranch;
    }
    public get gitTargetBranch(): string | undefined {
        return this['git_target_branch'];
    }
    public withMergeId(mergeId: string): IncConfigV2 {
        this['merge_id'] = mergeId;
        return this;
    }
    public set mergeId(mergeId: string  | undefined) {
        this['merge_id'] = mergeId;
    }
    public get mergeId(): string | undefined {
        return this['merge_id'];
    }
    public withEventType(eventType: string): IncConfigV2 {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): string | undefined {
        return this['event_type'];
    }
    public withAction(action: string): IncConfigV2 {
        this['action'] = action;
        return this;
    }
    public withTitle(title: string): IncConfigV2 {
        this['title'] = title;
        return this;
    }
}