

export class AppSearchParam {
    private 'business_id'?: number;
    public region?: string;
    public page?: number;
    private 'page_size'?: number;
    public keyword?: string;
    public constructor(businessId?: number, region?: string, page?: number) { 
        this['business_id'] = businessId;
        this['region'] = region;
        this['page'] = page;
    }
    public withBusinessId(businessId: number): AppSearchParam {
        this['business_id'] = businessId;
        return this;
    }
    public set businessId(businessId: number  | undefined) {
        this['business_id'] = businessId;
    }
    public get businessId(): number | undefined {
        return this['business_id'];
    }
    public withRegion(region: string): AppSearchParam {
        this['region'] = region;
        return this;
    }
    public withPage(page: number): AppSearchParam {
        this['page'] = page;
        return this;
    }
    public withPageSize(pageSize: number): AppSearchParam {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withKeyword(keyword: string): AppSearchParam {
        this['keyword'] = keyword;
        return this;
    }
}