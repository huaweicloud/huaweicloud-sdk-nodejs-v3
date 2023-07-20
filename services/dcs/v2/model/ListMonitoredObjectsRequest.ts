

export class ListMonitoredObjectsRequest {
    private 'dim_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(dimName?: string) { 
        this['dim_name'] = dimName;
    }
    public withDimName(dimName: string): ListMonitoredObjectsRequest {
        this['dim_name'] = dimName;
        return this;
    }
    public set dimName(dimName: string  | undefined) {
        this['dim_name'] = dimName;
    }
    public get dimName(): string | undefined {
        return this['dim_name'];
    }
    public withOffset(offset: number): ListMonitoredObjectsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListMonitoredObjectsRequest {
        this['limit'] = limit;
        return this;
    }
}