

export class ShowRepoIdRequest {
    private 'group_name'?: string;
    private 'repository_name'?: string;
    public constructor(groupName?: string, repositoryName?: string) { 
        this['group_name'] = groupName;
        this['repository_name'] = repositoryName;
    }
    public withGroupName(groupName: string): ShowRepoIdRequest {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withRepositoryName(repositoryName: string): ShowRepoIdRequest {
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