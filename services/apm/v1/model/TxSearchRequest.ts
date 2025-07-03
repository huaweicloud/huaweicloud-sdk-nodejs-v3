

export class TxSearchRequest {
    private 'business_id'?: number;
    public region?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'env_id'?: number;
    private 'request_id'?: string;
    private 'page_no'?: number;
    private 'page_size'?: number;
    public constructor(businessId?: number, region?: string, startTime?: string, endTime?: string, pageNo?: number) { 
        this['business_id'] = businessId;
        this['region'] = region;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['page_no'] = pageNo;
    }
    public withBusinessId(businessId: number): TxSearchRequest {
        this['business_id'] = businessId;
        return this;
    }
    public set businessId(businessId: number  | undefined) {
        this['business_id'] = businessId;
    }
    public get businessId(): number | undefined {
        return this['business_id'];
    }
    public withRegion(region: string): TxSearchRequest {
        this['region'] = region;
        return this;
    }
    public withStartTime(startTime: string): TxSearchRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): TxSearchRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withEnvId(envId: number): TxSearchRequest {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: number  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): number | undefined {
        return this['env_id'];
    }
    public withRequestId(requestId: string): TxSearchRequest {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageNo(pageNo: number): TxSearchRequest {
        this['page_no'] = pageNo;
        return this;
    }
    public set pageNo(pageNo: number  | undefined) {
        this['page_no'] = pageNo;
    }
    public get pageNo(): number | undefined {
        return this['page_no'];
    }
    public withPageSize(pageSize: number): TxSearchRequest {
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