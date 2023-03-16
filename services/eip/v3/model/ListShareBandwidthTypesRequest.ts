

export class ListShareBandwidthTypesRequest {
    public fields?: string;
    public id?: string;
    private 'bandwidth_type'?: string | undefined;
    private 'name_en'?: string | undefined;
    private 'name_zh'?: string | undefined;
    private 'public_border_group'?: string | undefined;
    private 'sort_key'?: string | undefined;
    private 'sort_dir'?: string | undefined;
    public limit?: number;
    public marker?: string;
    public offset?: number;
    public constructor() { 
    }
    public withFields(fields: string): ListShareBandwidthTypesRequest {
        this['fields'] = fields;
        return this;
    }
    public withId(id: string): ListShareBandwidthTypesRequest {
        this['id'] = id;
        return this;
    }
    public withBandwidthType(bandwidthType: string): ListShareBandwidthTypesRequest {
        this['bandwidth_type'] = bandwidthType;
        return this;
    }
    public set bandwidthType(bandwidthType: string | undefined) {
        this['bandwidth_type'] = bandwidthType;
    }
    public get bandwidthType() {
        return this['bandwidth_type'];
    }
    public withNameEn(nameEn: string): ListShareBandwidthTypesRequest {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn() {
        return this['name_en'];
    }
    public withNameZh(nameZh: string): ListShareBandwidthTypesRequest {
        this['name_zh'] = nameZh;
        return this;
    }
    public set nameZh(nameZh: string | undefined) {
        this['name_zh'] = nameZh;
    }
    public get nameZh() {
        return this['name_zh'];
    }
    public withPublicBorderGroup(publicBorderGroup: string): ListShareBandwidthTypesRequest {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup() {
        return this['public_border_group'];
    }
    public withSortKey(sortKey: string): ListShareBandwidthTypesRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey() {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListShareBandwidthTypesRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir() {
        return this['sort_dir'];
    }
    public withLimit(limit: number): ListShareBandwidthTypesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListShareBandwidthTypesRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ListShareBandwidthTypesRequest {
        this['offset'] = offset;
        return this;
    }
}