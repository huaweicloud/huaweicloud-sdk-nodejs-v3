

export class ShowCommitsByBranchRequest {
    private 'group_name'?: string;
    private 'page_index'?: number;
    private 'page_size'?: number;
    private 'ref_name'?: string;
    private 'repository_name'?: string;
    public constructor(groupName?: string, refName?: string, repositoryName?: string) { 
        this['group_name'] = groupName;
        this['ref_name'] = refName;
        this['repository_name'] = repositoryName;
    }
    public withGroupName(groupName: string): ShowCommitsByBranchRequest {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withPageIndex(pageIndex: number): ShowCommitsByBranchRequest {
        this['page_index'] = pageIndex;
        return this;
    }
    public set pageIndex(pageIndex: number  | undefined) {
        this['page_index'] = pageIndex;
    }
    public get pageIndex(): number | undefined {
        return this['page_index'];
    }
    public withPageSize(pageSize: number): ShowCommitsByBranchRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withRefName(refName: string): ShowCommitsByBranchRequest {
        this['ref_name'] = refName;
        return this;
    }
    public set refName(refName: string  | undefined) {
        this['ref_name'] = refName;
    }
    public get refName(): string | undefined {
        return this['ref_name'];
    }
    public withRepositoryName(repositoryName: string): ShowCommitsByBranchRequest {
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