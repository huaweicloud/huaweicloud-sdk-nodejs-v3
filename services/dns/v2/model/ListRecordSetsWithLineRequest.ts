

export class ListRecordSetsWithLineRequest {
    private 'zone_type'?: string;
    public marker?: string;
    public limit?: number;
    public offset?: number;
    private 'line_id'?: string;
    public tags?: string;
    public status?: string;
    public type?: string;
    public name?: string;
    public id?: string;
    public records?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    private 'health_check_id'?: string;
    private 'search_mode'?: string;
    public constructor() { 
    }
    public withZoneType(zoneType: string): ListRecordSetsWithLineRequest {
        this['zone_type'] = zoneType;
        return this;
    }
    public set zoneType(zoneType: string  | undefined) {
        this['zone_type'] = zoneType;
    }
    public get zoneType(): string | undefined {
        return this['zone_type'];
    }
    public withMarker(marker: string): ListRecordSetsWithLineRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListRecordSetsWithLineRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListRecordSetsWithLineRequest {
        this['offset'] = offset;
        return this;
    }
    public withLineId(lineId: string): ListRecordSetsWithLineRequest {
        this['line_id'] = lineId;
        return this;
    }
    public set lineId(lineId: string  | undefined) {
        this['line_id'] = lineId;
    }
    public get lineId(): string | undefined {
        return this['line_id'];
    }
    public withTags(tags: string): ListRecordSetsWithLineRequest {
        this['tags'] = tags;
        return this;
    }
    public withStatus(status: string): ListRecordSetsWithLineRequest {
        this['status'] = status;
        return this;
    }
    public withType(type: string): ListRecordSetsWithLineRequest {
        this['type'] = type;
        return this;
    }
    public withName(name: string): ListRecordSetsWithLineRequest {
        this['name'] = name;
        return this;
    }
    public withId(id: string): ListRecordSetsWithLineRequest {
        this['id'] = id;
        return this;
    }
    public withRecords(records: string): ListRecordSetsWithLineRequest {
        this['records'] = records;
        return this;
    }
    public withSortKey(sortKey: string): ListRecordSetsWithLineRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListRecordSetsWithLineRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withHealthCheckId(healthCheckId: string): ListRecordSetsWithLineRequest {
        this['health_check_id'] = healthCheckId;
        return this;
    }
    public set healthCheckId(healthCheckId: string  | undefined) {
        this['health_check_id'] = healthCheckId;
    }
    public get healthCheckId(): string | undefined {
        return this['health_check_id'];
    }
    public withSearchMode(searchMode: string): ListRecordSetsWithLineRequest {
        this['search_mode'] = searchMode;
        return this;
    }
    public set searchMode(searchMode: string  | undefined) {
        this['search_mode'] = searchMode;
    }
    public get searchMode(): string | undefined {
        return this['search_mode'];
    }
}