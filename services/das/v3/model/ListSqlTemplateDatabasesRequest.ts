

export class ListSqlTemplateDatabasesRequest {
    private 'instance_id'?: string;
    private 'node_id'?: string;
    private 'start_at'?: number;
    private 'end_at'?: number;
    public operation?: string;
    public keyword?: string;
    public sort?: string;
    public asc?: boolean;
    public size?: number;
    public constructor(instanceId?: string, startAt?: number, endAt?: number) { 
        this['instance_id'] = instanceId;
        this['start_at'] = startAt;
        this['end_at'] = endAt;
    }
    public withInstanceId(instanceId: string): ListSqlTemplateDatabasesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): ListSqlTemplateDatabasesRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withStartAt(startAt: number): ListSqlTemplateDatabasesRequest {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): ListSqlTemplateDatabasesRequest {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
    public withOperation(operation: string): ListSqlTemplateDatabasesRequest {
        this['operation'] = operation;
        return this;
    }
    public withKeyword(keyword: string): ListSqlTemplateDatabasesRequest {
        this['keyword'] = keyword;
        return this;
    }
    public withSort(sort: string): ListSqlTemplateDatabasesRequest {
        this['sort'] = sort;
        return this;
    }
    public withAsc(asc: boolean): ListSqlTemplateDatabasesRequest {
        this['asc'] = asc;
        return this;
    }
    public withSize(size: number): ListSqlTemplateDatabasesRequest {
        this['size'] = size;
        return this;
    }
}