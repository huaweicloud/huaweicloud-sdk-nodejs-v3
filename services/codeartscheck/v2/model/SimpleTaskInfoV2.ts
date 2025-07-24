

export class SimpleTaskInfoV2 {
    private 'task_id'?: string;
    private 'task_name'?: string;
    private 'creator_id'?: string;
    private 'git_url'?: string;
    private 'git_branch'?: string;
    private 'created_at'?: string;
    private 'last_check_time'?: string;
    public constructor() { 
    }
    public withTaskId(taskId: string): SimpleTaskInfoV2 {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withTaskName(taskName: string): SimpleTaskInfoV2 {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withCreatorId(creatorId: string): SimpleTaskInfoV2 {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withGitUrl(gitUrl: string): SimpleTaskInfoV2 {
        this['git_url'] = gitUrl;
        return this;
    }
    public set gitUrl(gitUrl: string  | undefined) {
        this['git_url'] = gitUrl;
    }
    public get gitUrl(): string | undefined {
        return this['git_url'];
    }
    public withGitBranch(gitBranch: string): SimpleTaskInfoV2 {
        this['git_branch'] = gitBranch;
        return this;
    }
    public set gitBranch(gitBranch: string  | undefined) {
        this['git_branch'] = gitBranch;
    }
    public get gitBranch(): string | undefined {
        return this['git_branch'];
    }
    public withCreatedAt(createdAt: string): SimpleTaskInfoV2 {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withLastCheckTime(lastCheckTime: string): SimpleTaskInfoV2 {
        this['last_check_time'] = lastCheckTime;
        return this;
    }
    public set lastCheckTime(lastCheckTime: string  | undefined) {
        this['last_check_time'] = lastCheckTime;
    }
    public get lastCheckTime(): string | undefined {
        return this['last_check_time'];
    }
}