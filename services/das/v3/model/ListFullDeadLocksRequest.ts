

export class ListFullDeadLocksRequest {
    private 'instance_id'?: string;
    private 'start_at'?: number;
    private 'end_at'?: number;
    private 'page_num'?: number;
    private 'page_size'?: number;
    public constructor(instanceId?: string, startAt?: number, endAt?: number, pageNum?: number, pageSize?: number) { 
        this['instance_id'] = instanceId;
        this['start_at'] = startAt;
        this['end_at'] = endAt;
        this['page_num'] = pageNum;
        this['page_size'] = pageSize;
    }
    public withInstanceId(instanceId: string): ListFullDeadLocksRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStartAt(startAt: number): ListFullDeadLocksRequest {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): ListFullDeadLocksRequest {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
    public withPageNum(pageNum: number): ListFullDeadLocksRequest {
        this['page_num'] = pageNum;
        return this;
    }
    public set pageNum(pageNum: number  | undefined) {
        this['page_num'] = pageNum;
    }
    public get pageNum(): number | undefined {
        return this['page_num'];
    }
    public withPageSize(pageSize: number): ListFullDeadLocksRequest {
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