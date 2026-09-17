

export class ShowTopDataRequest {
    private 'instance_id'?: string;
    private 'engine_type'?: string;
    private 'object_type'?: string;
    private 'end_time'?: number;
    private 'node_id'?: string;
    private 'order_by'?: string;
    public order?: string;
    public keyword?: string;
    private 'page_num'?: number;
    private 'page_size'?: number;
    public constructor(instanceId?: string, engineType?: string, objectType?: string, endTime?: number) { 
        this['instance_id'] = instanceId;
        this['engine_type'] = engineType;
        this['object_type'] = objectType;
        this['end_time'] = endTime;
    }
    public withInstanceId(instanceId: string): ShowTopDataRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withEngineType(engineType: string): ShowTopDataRequest {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withObjectType(objectType: string): ShowTopDataRequest {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): string | undefined {
        return this['object_type'];
    }
    public withEndTime(endTime: number): ShowTopDataRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withNodeId(nodeId: string): ShowTopDataRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withOrderBy(orderBy: string): ShowTopDataRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
    public withOrder(order: string): ShowTopDataRequest {
        this['order'] = order;
        return this;
    }
    public withKeyword(keyword: string): ShowTopDataRequest {
        this['keyword'] = keyword;
        return this;
    }
    public withPageNum(pageNum: number): ShowTopDataRequest {
        this['page_num'] = pageNum;
        return this;
    }
    public set pageNum(pageNum: number  | undefined) {
        this['page_num'] = pageNum;
    }
    public get pageNum(): number | undefined {
        return this['page_num'];
    }
    public withPageSize(pageSize: number): ShowTopDataRequest {
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