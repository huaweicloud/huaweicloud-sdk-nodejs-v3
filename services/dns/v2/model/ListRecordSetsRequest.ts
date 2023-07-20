

export class ListRecordSetsRequest {
    private 'zone_type'?: string;
    public marker?: string;
    private 'search_mode'?: string;
    public limit?: number;
    public offset?: number;
    public tags?: string;
    public status?: string;
    public type?: string;
    public name?: string;
    public id?: string;
    public records?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public constructor() { 
    }
    public withZoneType(zoneType: string): ListRecordSetsRequest {
        this['zone_type'] = zoneType;
        return this;
    }
    public set zoneType(zoneType: string  | undefined) {
        this['zone_type'] = zoneType;
    }
    public get zoneType(): string | undefined {
        return this['zone_type'];
    }
    public withMarker(marker: string): ListRecordSetsRequest {
        this['marker'] = marker;
        return this;
    }
    public withSearchMode(searchMode: string): ListRecordSetsRequest {
        this['search_mode'] = searchMode;
        return this;
    }
    public set searchMode(searchMode: string  | undefined) {
        this['search_mode'] = searchMode;
    }
    public get searchMode(): string | undefined {
        return this['search_mode'];
    }
    public withLimit(limit: number): ListRecordSetsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListRecordSetsRequest {
        this['offset'] = offset;
        return this;
    }
    public withTags(tags: string): ListRecordSetsRequest {
        this['tags'] = tags;
        return this;
    }
    public withStatus(status: string): ListRecordSetsRequest {
        this['status'] = status;
        return this;
    }
    public withType(type: string): ListRecordSetsRequest {
        this['type'] = type;
        return this;
    }
    public withName(name: string): ListRecordSetsRequest {
        this['name'] = name;
        return this;
    }
    public withId(id: string): ListRecordSetsRequest {
        this['id'] = id;
        return this;
    }
    public withRecords(records: string): ListRecordSetsRequest {
        this['records'] = records;
        return this;
    }
    public withSortKey(sortKey: string): ListRecordSetsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListRecordSetsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
}