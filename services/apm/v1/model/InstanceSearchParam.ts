

export class InstanceSearchParam {
    private 'env_id'?: number;
    public page?: number;
    private 'page_size'?: number;
    public keyword?: string;
    public status?: number;
    private 'return_count'?: boolean;
    public constructor(envId?: number, page?: number) { 
        this['env_id'] = envId;
        this['page'] = page;
    }
    public withEnvId(envId: number): InstanceSearchParam {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: number  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): number | undefined {
        return this['env_id'];
    }
    public withPage(page: number): InstanceSearchParam {
        this['page'] = page;
        return this;
    }
    public withPageSize(pageSize: number): InstanceSearchParam {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withKeyword(keyword: string): InstanceSearchParam {
        this['keyword'] = keyword;
        return this;
    }
    public withStatus(status: number): InstanceSearchParam {
        this['status'] = status;
        return this;
    }
    public withReturnCount(returnCount: boolean): InstanceSearchParam {
        this['return_count'] = returnCount;
        return this;
    }
    public set returnCount(returnCount: boolean  | undefined) {
        this['return_count'] = returnCount;
    }
    public get returnCount(): boolean | undefined {
        return this['return_count'];
    }
}