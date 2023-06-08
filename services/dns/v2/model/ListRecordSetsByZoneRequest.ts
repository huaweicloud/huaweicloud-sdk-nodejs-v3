

export class ListRecordSetsByZoneRequest {
    private 'zone_id': string | undefined;
    private 'search_mode'?: string | undefined;
    public marker?: string;
    public limit?: number;
    public offset?: number;
    public tags?: string;
    public status?: string;
    public type?: string;
    public name?: string;
    public id?: string;
    private 'sort_key'?: string | undefined;
    private 'sort_dir'?: string | undefined;
    public constructor(zoneId?: any) { 
        this['zone_id'] = zoneId;
    }
    public withZoneId(zoneId: string): ListRecordSetsByZoneRequest {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId() {
        return this['zone_id'];
    }
    public withSearchMode(searchMode: string): ListRecordSetsByZoneRequest {
        this['search_mode'] = searchMode;
        return this;
    }
    public set searchMode(searchMode: string | undefined) {
        this['search_mode'] = searchMode;
    }
    public get searchMode() {
        return this['search_mode'];
    }
    public withMarker(marker: string): ListRecordSetsByZoneRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListRecordSetsByZoneRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListRecordSetsByZoneRequest {
        this['offset'] = offset;
        return this;
    }
    public withTags(tags: string): ListRecordSetsByZoneRequest {
        this['tags'] = tags;
        return this;
    }
    public withStatus(status: string): ListRecordSetsByZoneRequest {
        this['status'] = status;
        return this;
    }
    public withType(type: string): ListRecordSetsByZoneRequest {
        this['type'] = type;
        return this;
    }
    public withName(name: string): ListRecordSetsByZoneRequest {
        this['name'] = name;
        return this;
    }
    public withId(id: string): ListRecordSetsByZoneRequest {
        this['id'] = id;
        return this;
    }
    public withSortKey(sortKey: string): ListRecordSetsByZoneRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey() {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListRecordSetsByZoneRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir() {
        return this['sort_dir'];
    }
}