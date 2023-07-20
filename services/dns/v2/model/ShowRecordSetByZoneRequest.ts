

export class ShowRecordSetByZoneRequest {
    private 'zone_id'?: string;
    public marker?: string;
    public limit?: number;
    public offset?: number;
    private 'line_id'?: string;
    public tags?: string;
    public status?: string;
    public type?: string;
    public name?: string;
    public id?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    private 'search_mode'?: string;
    public constructor(zoneId?: string) { 
        this['zone_id'] = zoneId;
    }
    public withZoneId(zoneId: string): ShowRecordSetByZoneRequest {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string  | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId(): string | undefined {
        return this['zone_id'];
    }
    public withMarker(marker: string): ShowRecordSetByZoneRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ShowRecordSetByZoneRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowRecordSetByZoneRequest {
        this['offset'] = offset;
        return this;
    }
    public withLineId(lineId: string): ShowRecordSetByZoneRequest {
        this['line_id'] = lineId;
        return this;
    }
    public set lineId(lineId: string  | undefined) {
        this['line_id'] = lineId;
    }
    public get lineId(): string | undefined {
        return this['line_id'];
    }
    public withTags(tags: string): ShowRecordSetByZoneRequest {
        this['tags'] = tags;
        return this;
    }
    public withStatus(status: string): ShowRecordSetByZoneRequest {
        this['status'] = status;
        return this;
    }
    public withType(type: string): ShowRecordSetByZoneRequest {
        this['type'] = type;
        return this;
    }
    public withName(name: string): ShowRecordSetByZoneRequest {
        this['name'] = name;
        return this;
    }
    public withId(id: string): ShowRecordSetByZoneRequest {
        this['id'] = id;
        return this;
    }
    public withSortKey(sortKey: string): ShowRecordSetByZoneRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ShowRecordSetByZoneRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withSearchMode(searchMode: string): ShowRecordSetByZoneRequest {
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