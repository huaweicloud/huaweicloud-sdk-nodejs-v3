

export class ListInferDeploymentsRequest {
    private 'service_id'?: string;
    private 'sort_key'?: string;
    public status?: string;
    private 'sort_dir'?: string;
    public limit?: number;
    public offset?: number;
    private 'delete_after'?: number;
    public constructor(serviceId?: string) { 
        this['service_id'] = serviceId;
    }
    public withServiceId(serviceId: string): ListInferDeploymentsRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withSortKey(sortKey: string): ListInferDeploymentsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withStatus(status: string): ListInferDeploymentsRequest {
        this['status'] = status;
        return this;
    }
    public withSortDir(sortDir: string): ListInferDeploymentsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withLimit(limit: number): ListInferDeploymentsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListInferDeploymentsRequest {
        this['offset'] = offset;
        return this;
    }
    public withDeleteAfter(deleteAfter: number): ListInferDeploymentsRequest {
        this['delete_after'] = deleteAfter;
        return this;
    }
    public set deleteAfter(deleteAfter: number  | undefined) {
        this['delete_after'] = deleteAfter;
    }
    public get deleteAfter(): number | undefined {
        return this['delete_after'];
    }
}