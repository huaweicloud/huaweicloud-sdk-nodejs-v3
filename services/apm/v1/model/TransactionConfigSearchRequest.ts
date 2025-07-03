

export class TransactionConfigSearchRequest {
    private 'business_id'?: number;
    private 'env_id'?: number;
    private 'page_no'?: number;
    private 'page_size'?: number;
    public constructor(businessId?: number, pageNo?: number, pageSize?: number) { 
        this['business_id'] = businessId;
        this['page_no'] = pageNo;
        this['page_size'] = pageSize;
    }
    public withBusinessId(businessId: number): TransactionConfigSearchRequest {
        this['business_id'] = businessId;
        return this;
    }
    public set businessId(businessId: number  | undefined) {
        this['business_id'] = businessId;
    }
    public get businessId(): number | undefined {
        return this['business_id'];
    }
    public withEnvId(envId: number): TransactionConfigSearchRequest {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: number  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): number | undefined {
        return this['env_id'];
    }
    public withPageNo(pageNo: number): TransactionConfigSearchRequest {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: number): TransactionConfigSearchRequest {
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