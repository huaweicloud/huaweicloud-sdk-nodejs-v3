

export class TagParam {
    private 'business_id'?: number;
    public keyword?: string;
    private 'page_enable'?: boolean;
    private 'page_number'?: number;
    private 'page_size'?: number;
    public constructor(businessId?: number) { 
        this['business_id'] = businessId;
    }
    public withBusinessId(businessId: number): TagParam {
        this['business_id'] = businessId;
        return this;
    }
    public set businessId(businessId: number  | undefined) {
        this['business_id'] = businessId;
    }
    public get businessId(): number | undefined {
        return this['business_id'];
    }
    public withKeyword(keyword: string): TagParam {
        this['keyword'] = keyword;
        return this;
    }
    public withPageEnable(pageEnable: boolean): TagParam {
        this['page_enable'] = pageEnable;
        return this;
    }
    public set pageEnable(pageEnable: boolean  | undefined) {
        this['page_enable'] = pageEnable;
    }
    public get pageEnable(): boolean | undefined {
        return this['page_enable'];
    }
    public withPageNumber(pageNumber: number): TagParam {
        this['page_number'] = pageNumber;
        return this;
    }
    public set pageNumber(pageNumber: number  | undefined) {
        this['page_number'] = pageNumber;
    }
    public get pageNumber(): number | undefined {
        return this['page_number'];
    }
    public withPageSize(pageSize: number): TagParam {
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