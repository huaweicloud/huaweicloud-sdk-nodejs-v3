

export class QueryDRInfoRequest {
    public id?: string;
    public status?: string;
    private 'master_instance_id'?: string;
    private 'master_region'?: string;
    private 'slave_instance_id'?: string;
    private 'slave_region'?: string;
    private 'create_at_start'?: number;
    private 'create_at_end'?: number;
    public order?: string;
    private 'sort_field'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withId(id: string): QueryDRInfoRequest {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): QueryDRInfoRequest {
        this['status'] = status;
        return this;
    }
    public withMasterInstanceId(masterInstanceId: string): QueryDRInfoRequest {
        this['master_instance_id'] = masterInstanceId;
        return this;
    }
    public set masterInstanceId(masterInstanceId: string  | undefined) {
        this['master_instance_id'] = masterInstanceId;
    }
    public get masterInstanceId(): string | undefined {
        return this['master_instance_id'];
    }
    public withMasterRegion(masterRegion: string): QueryDRInfoRequest {
        this['master_region'] = masterRegion;
        return this;
    }
    public set masterRegion(masterRegion: string  | undefined) {
        this['master_region'] = masterRegion;
    }
    public get masterRegion(): string | undefined {
        return this['master_region'];
    }
    public withSlaveInstanceId(slaveInstanceId: string): QueryDRInfoRequest {
        this['slave_instance_id'] = slaveInstanceId;
        return this;
    }
    public set slaveInstanceId(slaveInstanceId: string  | undefined) {
        this['slave_instance_id'] = slaveInstanceId;
    }
    public get slaveInstanceId(): string | undefined {
        return this['slave_instance_id'];
    }
    public withSlaveRegion(slaveRegion: string): QueryDRInfoRequest {
        this['slave_region'] = slaveRegion;
        return this;
    }
    public set slaveRegion(slaveRegion: string  | undefined) {
        this['slave_region'] = slaveRegion;
    }
    public get slaveRegion(): string | undefined {
        return this['slave_region'];
    }
    public withCreateAtStart(createAtStart: number): QueryDRInfoRequest {
        this['create_at_start'] = createAtStart;
        return this;
    }
    public set createAtStart(createAtStart: number  | undefined) {
        this['create_at_start'] = createAtStart;
    }
    public get createAtStart(): number | undefined {
        return this['create_at_start'];
    }
    public withCreateAtEnd(createAtEnd: number): QueryDRInfoRequest {
        this['create_at_end'] = createAtEnd;
        return this;
    }
    public set createAtEnd(createAtEnd: number  | undefined) {
        this['create_at_end'] = createAtEnd;
    }
    public get createAtEnd(): number | undefined {
        return this['create_at_end'];
    }
    public withOrder(order: string): QueryDRInfoRequest {
        this['order'] = order;
        return this;
    }
    public withSortField(sortField: string): QueryDRInfoRequest {
        this['sort_field'] = sortField;
        return this;
    }
    public set sortField(sortField: string  | undefined) {
        this['sort_field'] = sortField;
    }
    public get sortField(): string | undefined {
        return this['sort_field'];
    }
    public withOffset(offset: number): QueryDRInfoRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): QueryDRInfoRequest {
        this['limit'] = limit;
        return this;
    }
}