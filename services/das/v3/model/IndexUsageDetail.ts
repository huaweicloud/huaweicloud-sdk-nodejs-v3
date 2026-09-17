

export class IndexUsageDetail {
    private 'table_name'?: string;
    private 'index_name'?: string;
    private 'ix_type_desc'?: string;
    private 'fragmentation_percentage'?: number;
    private 'index_size_mb'?: number;
    private 'maintenance_operation'?: string;
    private 'page_count'?: number;
    private 'ix_seek_count'?: number;
    private 'ix_scan_count'?: number;
    private 'ix_key_lookup_count'?: number;
    private 'ix_update_count'?: number;
    private 'seek_percentage'?: number;
    private 'scan_percentage'?: number;
    private 'key_lookup_percentage'?: number;
    private 'update_percentage'?: number;
    private 'is_primary_key'?: boolean;
    private 'is_disabled'?: boolean;
    private 'column_list'?: string;
    private 'fill_factor'?: string;
    private 'create_date'?: number;
    private 'stats_last_updated'?: number;
    public constructor() { 
    }
    public withTableName(tableName: string): IndexUsageDetail {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withIndexName(indexName: string): IndexUsageDetail {
        this['index_name'] = indexName;
        return this;
    }
    public set indexName(indexName: string  | undefined) {
        this['index_name'] = indexName;
    }
    public get indexName(): string | undefined {
        return this['index_name'];
    }
    public withIxTypeDesc(ixTypeDesc: string): IndexUsageDetail {
        this['ix_type_desc'] = ixTypeDesc;
        return this;
    }
    public set ixTypeDesc(ixTypeDesc: string  | undefined) {
        this['ix_type_desc'] = ixTypeDesc;
    }
    public get ixTypeDesc(): string | undefined {
        return this['ix_type_desc'];
    }
    public withFragmentationPercentage(fragmentationPercentage: number): IndexUsageDetail {
        this['fragmentation_percentage'] = fragmentationPercentage;
        return this;
    }
    public set fragmentationPercentage(fragmentationPercentage: number  | undefined) {
        this['fragmentation_percentage'] = fragmentationPercentage;
    }
    public get fragmentationPercentage(): number | undefined {
        return this['fragmentation_percentage'];
    }
    public withIndexSizeMb(indexSizeMb: number): IndexUsageDetail {
        this['index_size_mb'] = indexSizeMb;
        return this;
    }
    public set indexSizeMb(indexSizeMb: number  | undefined) {
        this['index_size_mb'] = indexSizeMb;
    }
    public get indexSizeMb(): number | undefined {
        return this['index_size_mb'];
    }
    public withMaintenanceOperation(maintenanceOperation: string): IndexUsageDetail {
        this['maintenance_operation'] = maintenanceOperation;
        return this;
    }
    public set maintenanceOperation(maintenanceOperation: string  | undefined) {
        this['maintenance_operation'] = maintenanceOperation;
    }
    public get maintenanceOperation(): string | undefined {
        return this['maintenance_operation'];
    }
    public withPageCount(pageCount: number): IndexUsageDetail {
        this['page_count'] = pageCount;
        return this;
    }
    public set pageCount(pageCount: number  | undefined) {
        this['page_count'] = pageCount;
    }
    public get pageCount(): number | undefined {
        return this['page_count'];
    }
    public withIxSeekCount(ixSeekCount: number): IndexUsageDetail {
        this['ix_seek_count'] = ixSeekCount;
        return this;
    }
    public set ixSeekCount(ixSeekCount: number  | undefined) {
        this['ix_seek_count'] = ixSeekCount;
    }
    public get ixSeekCount(): number | undefined {
        return this['ix_seek_count'];
    }
    public withIxScanCount(ixScanCount: number): IndexUsageDetail {
        this['ix_scan_count'] = ixScanCount;
        return this;
    }
    public set ixScanCount(ixScanCount: number  | undefined) {
        this['ix_scan_count'] = ixScanCount;
    }
    public get ixScanCount(): number | undefined {
        return this['ix_scan_count'];
    }
    public withIxKeyLookupCount(ixKeyLookupCount: number): IndexUsageDetail {
        this['ix_key_lookup_count'] = ixKeyLookupCount;
        return this;
    }
    public set ixKeyLookupCount(ixKeyLookupCount: number  | undefined) {
        this['ix_key_lookup_count'] = ixKeyLookupCount;
    }
    public get ixKeyLookupCount(): number | undefined {
        return this['ix_key_lookup_count'];
    }
    public withIxUpdateCount(ixUpdateCount: number): IndexUsageDetail {
        this['ix_update_count'] = ixUpdateCount;
        return this;
    }
    public set ixUpdateCount(ixUpdateCount: number  | undefined) {
        this['ix_update_count'] = ixUpdateCount;
    }
    public get ixUpdateCount(): number | undefined {
        return this['ix_update_count'];
    }
    public withSeekPercentage(seekPercentage: number): IndexUsageDetail {
        this['seek_percentage'] = seekPercentage;
        return this;
    }
    public set seekPercentage(seekPercentage: number  | undefined) {
        this['seek_percentage'] = seekPercentage;
    }
    public get seekPercentage(): number | undefined {
        return this['seek_percentage'];
    }
    public withScanPercentage(scanPercentage: number): IndexUsageDetail {
        this['scan_percentage'] = scanPercentage;
        return this;
    }
    public set scanPercentage(scanPercentage: number  | undefined) {
        this['scan_percentage'] = scanPercentage;
    }
    public get scanPercentage(): number | undefined {
        return this['scan_percentage'];
    }
    public withKeyLookupPercentage(keyLookupPercentage: number): IndexUsageDetail {
        this['key_lookup_percentage'] = keyLookupPercentage;
        return this;
    }
    public set keyLookupPercentage(keyLookupPercentage: number  | undefined) {
        this['key_lookup_percentage'] = keyLookupPercentage;
    }
    public get keyLookupPercentage(): number | undefined {
        return this['key_lookup_percentage'];
    }
    public withUpdatePercentage(updatePercentage: number): IndexUsageDetail {
        this['update_percentage'] = updatePercentage;
        return this;
    }
    public set updatePercentage(updatePercentage: number  | undefined) {
        this['update_percentage'] = updatePercentage;
    }
    public get updatePercentage(): number | undefined {
        return this['update_percentage'];
    }
    public withIsPrimaryKey(isPrimaryKey: boolean): IndexUsageDetail {
        this['is_primary_key'] = isPrimaryKey;
        return this;
    }
    public set isPrimaryKey(isPrimaryKey: boolean  | undefined) {
        this['is_primary_key'] = isPrimaryKey;
    }
    public get isPrimaryKey(): boolean | undefined {
        return this['is_primary_key'];
    }
    public withIsDisabled(isDisabled: boolean): IndexUsageDetail {
        this['is_disabled'] = isDisabled;
        return this;
    }
    public set isDisabled(isDisabled: boolean  | undefined) {
        this['is_disabled'] = isDisabled;
    }
    public get isDisabled(): boolean | undefined {
        return this['is_disabled'];
    }
    public withColumnList(columnList: string): IndexUsageDetail {
        this['column_list'] = columnList;
        return this;
    }
    public set columnList(columnList: string  | undefined) {
        this['column_list'] = columnList;
    }
    public get columnList(): string | undefined {
        return this['column_list'];
    }
    public withFillFactor(fillFactor: string): IndexUsageDetail {
        this['fill_factor'] = fillFactor;
        return this;
    }
    public set fillFactor(fillFactor: string  | undefined) {
        this['fill_factor'] = fillFactor;
    }
    public get fillFactor(): string | undefined {
        return this['fill_factor'];
    }
    public withCreateDate(createDate: number): IndexUsageDetail {
        this['create_date'] = createDate;
        return this;
    }
    public set createDate(createDate: number  | undefined) {
        this['create_date'] = createDate;
    }
    public get createDate(): number | undefined {
        return this['create_date'];
    }
    public withStatsLastUpdated(statsLastUpdated: number): IndexUsageDetail {
        this['stats_last_updated'] = statsLastUpdated;
        return this;
    }
    public set statsLastUpdated(statsLastUpdated: number  | undefined) {
        this['stats_last_updated'] = statsLastUpdated;
    }
    public get statsLastUpdated(): number | undefined {
        return this['stats_last_updated'];
    }
}