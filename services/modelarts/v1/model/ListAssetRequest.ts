

export class ListAssetRequest {
    private 'sort_dir'?: string;
    private 'sort_key'?: string;
    public limit?: number;
    public offset?: number;
    private 'workspace_id'?: string;
    private 'asset_name'?: string;
    private 'asset_type'?: Array<string>;
    private 'asset_source'?: string;
    private 'asset_source_type'?: string;
    private 'asset_code'?: string;
    private 'asset_version'?: string;
    private 'asset_group_id'?: string;
    private 'filter_all_version'?: boolean;
    private 'support_actions'?: Array<string>;
    public tag?: Array<string>;
    private 'is_mine'?: boolean;
    private 'with_actions'?: boolean;
    private 'asset_series'?: string;
    private 'asset_capabilities'?: Array<string>;
    private 'asset_scenes'?: Array<string>;
    private 'root_asset_id'?: string;
    private 'parent_asset_id'?: string;
    private 'is_deleted'?: boolean;
    private 'asset_ids'?: Array<string>;
    private 'tag_mode'?: string;
    private 'dataset_usage'?: string;
    public status?: string;
    private 'dataset_file_formats'?: Array<string>;
    private 'dataset_type'?: string;
    private 'dataset_sub_type'?: string;
    private 'dataset_schema_format'?: string;
    public creator?: string;
    private 'data_source_id'?: string;
    public constructor() { 
    }
    public withSortDir(sortDir: string): ListAssetRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withSortKey(sortKey: string): ListAssetRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withLimit(limit: number): ListAssetRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAssetRequest {
        this['offset'] = offset;
        return this;
    }
    public withWorkspaceId(workspaceId: string): ListAssetRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withAssetName(assetName: string): ListAssetRequest {
        this['asset_name'] = assetName;
        return this;
    }
    public set assetName(assetName: string  | undefined) {
        this['asset_name'] = assetName;
    }
    public get assetName(): string | undefined {
        return this['asset_name'];
    }
    public withAssetType(assetType: Array<string>): ListAssetRequest {
        this['asset_type'] = assetType;
        return this;
    }
    public set assetType(assetType: Array<string>  | undefined) {
        this['asset_type'] = assetType;
    }
    public get assetType(): Array<string> | undefined {
        return this['asset_type'];
    }
    public withAssetSource(assetSource: string): ListAssetRequest {
        this['asset_source'] = assetSource;
        return this;
    }
    public set assetSource(assetSource: string  | undefined) {
        this['asset_source'] = assetSource;
    }
    public get assetSource(): string | undefined {
        return this['asset_source'];
    }
    public withAssetSourceType(assetSourceType: string): ListAssetRequest {
        this['asset_source_type'] = assetSourceType;
        return this;
    }
    public set assetSourceType(assetSourceType: string  | undefined) {
        this['asset_source_type'] = assetSourceType;
    }
    public get assetSourceType(): string | undefined {
        return this['asset_source_type'];
    }
    public withAssetCode(assetCode: string): ListAssetRequest {
        this['asset_code'] = assetCode;
        return this;
    }
    public set assetCode(assetCode: string  | undefined) {
        this['asset_code'] = assetCode;
    }
    public get assetCode(): string | undefined {
        return this['asset_code'];
    }
    public withAssetVersion(assetVersion: string): ListAssetRequest {
        this['asset_version'] = assetVersion;
        return this;
    }
    public set assetVersion(assetVersion: string  | undefined) {
        this['asset_version'] = assetVersion;
    }
    public get assetVersion(): string | undefined {
        return this['asset_version'];
    }
    public withAssetGroupId(assetGroupId: string): ListAssetRequest {
        this['asset_group_id'] = assetGroupId;
        return this;
    }
    public set assetGroupId(assetGroupId: string  | undefined) {
        this['asset_group_id'] = assetGroupId;
    }
    public get assetGroupId(): string | undefined {
        return this['asset_group_id'];
    }
    public withFilterAllVersion(filterAllVersion: boolean): ListAssetRequest {
        this['filter_all_version'] = filterAllVersion;
        return this;
    }
    public set filterAllVersion(filterAllVersion: boolean  | undefined) {
        this['filter_all_version'] = filterAllVersion;
    }
    public get filterAllVersion(): boolean | undefined {
        return this['filter_all_version'];
    }
    public withSupportActions(supportActions: Array<string>): ListAssetRequest {
        this['support_actions'] = supportActions;
        return this;
    }
    public set supportActions(supportActions: Array<string>  | undefined) {
        this['support_actions'] = supportActions;
    }
    public get supportActions(): Array<string> | undefined {
        return this['support_actions'];
    }
    public withTag(tag: Array<string>): ListAssetRequest {
        this['tag'] = tag;
        return this;
    }
    public withIsMine(isMine: boolean): ListAssetRequest {
        this['is_mine'] = isMine;
        return this;
    }
    public set isMine(isMine: boolean  | undefined) {
        this['is_mine'] = isMine;
    }
    public get isMine(): boolean | undefined {
        return this['is_mine'];
    }
    public withWithActions(withActions: boolean): ListAssetRequest {
        this['with_actions'] = withActions;
        return this;
    }
    public set withActions(withActions: boolean  | undefined) {
        this['with_actions'] = withActions;
    }
    public get withActions(): boolean | undefined {
        return this['with_actions'];
    }
    public withAssetSeries(assetSeries: string): ListAssetRequest {
        this['asset_series'] = assetSeries;
        return this;
    }
    public set assetSeries(assetSeries: string  | undefined) {
        this['asset_series'] = assetSeries;
    }
    public get assetSeries(): string | undefined {
        return this['asset_series'];
    }
    public withAssetCapabilities(assetCapabilities: Array<string>): ListAssetRequest {
        this['asset_capabilities'] = assetCapabilities;
        return this;
    }
    public set assetCapabilities(assetCapabilities: Array<string>  | undefined) {
        this['asset_capabilities'] = assetCapabilities;
    }
    public get assetCapabilities(): Array<string> | undefined {
        return this['asset_capabilities'];
    }
    public withAssetScenes(assetScenes: Array<string>): ListAssetRequest {
        this['asset_scenes'] = assetScenes;
        return this;
    }
    public set assetScenes(assetScenes: Array<string>  | undefined) {
        this['asset_scenes'] = assetScenes;
    }
    public get assetScenes(): Array<string> | undefined {
        return this['asset_scenes'];
    }
    public withRootAssetId(rootAssetId: string): ListAssetRequest {
        this['root_asset_id'] = rootAssetId;
        return this;
    }
    public set rootAssetId(rootAssetId: string  | undefined) {
        this['root_asset_id'] = rootAssetId;
    }
    public get rootAssetId(): string | undefined {
        return this['root_asset_id'];
    }
    public withParentAssetId(parentAssetId: string): ListAssetRequest {
        this['parent_asset_id'] = parentAssetId;
        return this;
    }
    public set parentAssetId(parentAssetId: string  | undefined) {
        this['parent_asset_id'] = parentAssetId;
    }
    public get parentAssetId(): string | undefined {
        return this['parent_asset_id'];
    }
    public withIsDeleted(isDeleted: boolean): ListAssetRequest {
        this['is_deleted'] = isDeleted;
        return this;
    }
    public set isDeleted(isDeleted: boolean  | undefined) {
        this['is_deleted'] = isDeleted;
    }
    public get isDeleted(): boolean | undefined {
        return this['is_deleted'];
    }
    public withAssetIds(assetIds: Array<string>): ListAssetRequest {
        this['asset_ids'] = assetIds;
        return this;
    }
    public set assetIds(assetIds: Array<string>  | undefined) {
        this['asset_ids'] = assetIds;
    }
    public get assetIds(): Array<string> | undefined {
        return this['asset_ids'];
    }
    public withTagMode(tagMode: string): ListAssetRequest {
        this['tag_mode'] = tagMode;
        return this;
    }
    public set tagMode(tagMode: string  | undefined) {
        this['tag_mode'] = tagMode;
    }
    public get tagMode(): string | undefined {
        return this['tag_mode'];
    }
    public withDatasetUsage(datasetUsage: string): ListAssetRequest {
        this['dataset_usage'] = datasetUsage;
        return this;
    }
    public set datasetUsage(datasetUsage: string  | undefined) {
        this['dataset_usage'] = datasetUsage;
    }
    public get datasetUsage(): string | undefined {
        return this['dataset_usage'];
    }
    public withStatus(status: string): ListAssetRequest {
        this['status'] = status;
        return this;
    }
    public withDatasetFileFormats(datasetFileFormats: Array<string>): ListAssetRequest {
        this['dataset_file_formats'] = datasetFileFormats;
        return this;
    }
    public set datasetFileFormats(datasetFileFormats: Array<string>  | undefined) {
        this['dataset_file_formats'] = datasetFileFormats;
    }
    public get datasetFileFormats(): Array<string> | undefined {
        return this['dataset_file_formats'];
    }
    public withDatasetType(datasetType: string): ListAssetRequest {
        this['dataset_type'] = datasetType;
        return this;
    }
    public set datasetType(datasetType: string  | undefined) {
        this['dataset_type'] = datasetType;
    }
    public get datasetType(): string | undefined {
        return this['dataset_type'];
    }
    public withDatasetSubType(datasetSubType: string): ListAssetRequest {
        this['dataset_sub_type'] = datasetSubType;
        return this;
    }
    public set datasetSubType(datasetSubType: string  | undefined) {
        this['dataset_sub_type'] = datasetSubType;
    }
    public get datasetSubType(): string | undefined {
        return this['dataset_sub_type'];
    }
    public withDatasetSchemaFormat(datasetSchemaFormat: string): ListAssetRequest {
        this['dataset_schema_format'] = datasetSchemaFormat;
        return this;
    }
    public set datasetSchemaFormat(datasetSchemaFormat: string  | undefined) {
        this['dataset_schema_format'] = datasetSchemaFormat;
    }
    public get datasetSchemaFormat(): string | undefined {
        return this['dataset_schema_format'];
    }
    public withCreator(creator: string): ListAssetRequest {
        this['creator'] = creator;
        return this;
    }
    public withDataSourceId(dataSourceId: string): ListAssetRequest {
        this['data_source_id'] = dataSourceId;
        return this;
    }
    public set dataSourceId(dataSourceId: string  | undefined) {
        this['data_source_id'] = dataSourceId;
    }
    public get dataSourceId(): string | undefined {
        return this['data_source_id'];
    }
}