

export class GetEnvMonitorItemListParam {
    private 'env_id'?: number;
    public page?: number;
    private 'page_size'?: number;
    public constructor(envId?: number, page?: number) { 
        this['env_id'] = envId;
        this['page'] = page;
    }
    public withEnvId(envId: number): GetEnvMonitorItemListParam {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: number  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): number | undefined {
        return this['env_id'];
    }
    public withPage(page: number): GetEnvMonitorItemListParam {
        this['page'] = page;
        return this;
    }
    public withPageSize(pageSize: number): GetEnvMonitorItemListParam {
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