

export class ListProjectUsersRequest {
    private 'repo_id'?: string;
    public scene?: string;
    private 'page_no'?: number;
    private 'page_size'?: number;
    public constructor(repoId?: string) { 
        this['repo_id'] = repoId;
    }
    public withRepoId(repoId: string): ListProjectUsersRequest {
        this['repo_id'] = repoId;
        return this;
    }
    public set repoId(repoId: string  | undefined) {
        this['repo_id'] = repoId;
    }
    public get repoId(): string | undefined {
        return this['repo_id'];
    }
    public withScene(scene: string): ListProjectUsersRequest {
        this['scene'] = scene;
        return this;
    }
    public withPageNo(pageNo: number): ListProjectUsersRequest {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: number): ListProjectUsersRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
}