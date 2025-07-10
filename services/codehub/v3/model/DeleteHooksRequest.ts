

export class DeleteHooksRequest {
    private 'group_name'?: string;
    private 'hook_id'?: number;
    private 'repository_name'?: string;
    public constructor(groupName?: string, hookId?: number, repositoryName?: string) { 
        this['group_name'] = groupName;
        this['hook_id'] = hookId;
        this['repository_name'] = repositoryName;
    }
    public withGroupName(groupName: string): DeleteHooksRequest {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withHookId(hookId: number): DeleteHooksRequest {
        this['hook_id'] = hookId;
        return this;
    }
    public set hookId(hookId: number  | undefined) {
        this['hook_id'] = hookId;
    }
    public get hookId(): number | undefined {
        return this['hook_id'];
    }
    public withRepositoryName(repositoryName: string): DeleteHooksRequest {
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