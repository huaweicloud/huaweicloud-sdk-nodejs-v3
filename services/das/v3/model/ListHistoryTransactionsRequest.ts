

export class ListHistoryTransactionsRequest {
    private 'instance_id'?: string;
    private 'start_at'?: number;
    private 'end_at'?: number;
    private 'page_num'?: number;
    private 'page_size'?: number;
    public order?: string;
    private 'order_by'?: string;
    private 'last_sec_min'?: number;
    private 'last_sec_max'?: number;
    public constructor(instanceId?: string, startAt?: number, endAt?: number) { 
        this['instance_id'] = instanceId;
        this['start_at'] = startAt;
        this['end_at'] = endAt;
    }
    public withInstanceId(instanceId: string): ListHistoryTransactionsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStartAt(startAt: number): ListHistoryTransactionsRequest {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): ListHistoryTransactionsRequest {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
    public withPageNum(pageNum: number): ListHistoryTransactionsRequest {
        this['page_num'] = pageNum;
        return this;
    }
    public set pageNum(pageNum: number  | undefined) {
        this['page_num'] = pageNum;
    }
    public get pageNum(): number | undefined {
        return this['page_num'];
    }
    public withPageSize(pageSize: number): ListHistoryTransactionsRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withOrder(order: string): ListHistoryTransactionsRequest {
        this['order'] = order;
        return this;
    }
    public withOrderBy(orderBy: string): ListHistoryTransactionsRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
    public withLastSecMin(lastSecMin: number): ListHistoryTransactionsRequest {
        this['last_sec_min'] = lastSecMin;
        return this;
    }
    public set lastSecMin(lastSecMin: number  | undefined) {
        this['last_sec_min'] = lastSecMin;
    }
    public get lastSecMin(): number | undefined {
        return this['last_sec_min'];
    }
    public withLastSecMax(lastSecMax: number): ListHistoryTransactionsRequest {
        this['last_sec_max'] = lastSecMax;
        return this;
    }
    public set lastSecMax(lastSecMax: number  | undefined) {
        this['last_sec_max'] = lastSecMax;
    }
    public get lastSecMax(): number | undefined {
        return this['last_sec_max'];
    }
}