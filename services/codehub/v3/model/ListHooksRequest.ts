

export class ListHooksRequest {
    private 'group_name'?: string;
    private 'hook_id'?: string;
    private 'repository_name'?: string;
    public constructor(groupName?: string, repositoryName?: string) { 
        this['group_name'] = groupName;
        this['repository_name'] = repositoryName;
    }
    public withGroupName(groupName: string): ListHooksRequest {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withHookId(hookId: string): ListHooksRequest {
        this['hook_id'] = hookId;
        return this;
    }
    public set hookId(hookId: string  | undefined) {
        this['hook_id'] = hookId;
    }
    public get hookId(): string | undefined {
        return this['hook_id'];
    }
    public withRepositoryName(repositoryName: string): ListHooksRequest {
        this['repository_name'] = repositoryName;
        return this;
    }
    public set repositoryName(repositoryName: string  | undefined) {
        this['repository_name'] = repositoryName;
    }
    public get repositoryName(): string | undefined {
        return this['repository_name'];
    }
}