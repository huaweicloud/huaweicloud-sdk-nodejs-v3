

export class AgentSearchParam {
    private 'business_id'?: number;
    private 'env_id'?: number;
    public status?: AgentSearchParamStatusEnum | string;
    public region?: string;
    private 'order_by_status'?: string;
    public page?: number;
    private 'page_size'?: number;
    public keyword?: string;
    public constructor(businessId?: number, region?: string, page?: number) { 
        this['business_id'] = businessId;
        this['region'] = region;
        this['page'] = page;
    }
    public withBusinessId(businessId: number): AgentSearchParam {
        this['business_id'] = businessId;
        return this;
    }
    public set businessId(businessId: number  | undefined) {
        this['business_id'] = businessId;
    }
    public get businessId(): number | undefined {
        return this['business_id'];
    }
    public withEnvId(envId: number): AgentSearchParam {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: number  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): number | undefined {
        return this['env_id'];
    }
    public withStatus(status: AgentSearchParamStatusEnum | string): AgentSearchParam {
        this['status'] = status;
        return this;
    }
    public withRegion(region: string): AgentSearchParam {
        this['region'] = region;
        return this;
    }
    public withOrderByStatus(orderByStatus: string): AgentSearchParam {
        this['order_by_status'] = orderByStatus;
        return this;
    }
    public set orderByStatus(orderByStatus: string  | undefined) {
        this['order_by_status'] = orderByStatus;
    }
    public get orderByStatus(): string | undefined {
        return this['order_by_status'];
    }
    public withPage(page: number): AgentSearchParam {
        this['page'] = page;
        return this;
    }
    public withPageSize(pageSize: number): AgentSearchParam {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withKeyword(keyword: string): AgentSearchParam {
        this['keyword'] = keyword;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AgentSearchParamStatusEnum {
    ONLINE = 'online',
    DISABLE = 'disable',
    OFFLINE = 'offline'
}
