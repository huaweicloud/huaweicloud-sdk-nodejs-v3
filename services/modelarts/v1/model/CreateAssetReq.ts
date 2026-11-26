import { AssetActionReq } from './AssetActionReq';


export class CreateAssetReq {
    private 'parent_asset_id'?: string;
    private 'api_version'?: string;
    private 'asset_name'?: string;
    private 'asset_source'?: CreateAssetReqAssetSourceEnum | string;
    private 'asset_source_type'?: CreateAssetReqAssetSourceTypeEnum | string;
    private 'asset_code'?: string;
    private 'asset_desc'?: string;
    private 'asset_group_desc'?: string;
    private 'asset_version'?: string;
    private 'support_actions'?: Array<string>;
    private 'asset_location'?: string;
    private 'asset_type'?: CreateAssetReqAssetTypeEnum | string;
    private 'asset_group_id'?: string;
    private 'asset_series'?: string;
    private 'asset_capabilities'?: Array<string>;
    public actions?: Array<AssetActionReq>;
    private 'source_operation'?: string;
    private 'source_job_name'?: string;
    private 'source_job_id'?: string;
    public status?: CreateAssetReqStatusEnum | string;
    private 'dataset_usage'?: string;
    private 'dataset_file_formats'?: Array<string>;
    private 'dataset_type'?: string;
    private 'dataset_sub_type'?: string;
    private 'dataset_schema_format'?: string;
    private 'import_file_source'?: CreateAssetReqImportFileSourceEnum | string;
    private 'data_source_id'?: string;
    public constructor(assetVersion?: string) { 
        this['asset_version'] = assetVersion;
    }
    public withParentAssetId(parentAssetId: string): CreateAssetReq {
        this['parent_asset_id'] = parentAssetId;
        return this;
    }
    public set parentAssetId(parentAssetId: string  | undefined) {
        this['parent_asset_id'] = parentAssetId;
    }
    public get parentAssetId(): string | undefined {
        return this['parent_asset_id'];
    }
    public withApiVersion(apiVersion: string): CreateAssetReq {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: string  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): string | undefined {
        return this['api_version'];
    }
    public withAssetName(assetName: string): CreateAssetReq {
        this['asset_name'] = assetName;
        return this;
    }
    public set assetName(assetName: string  | undefined) {
        this['asset_name'] = assetName;
    }
    public get assetName(): string | undefined {
        return this['asset_name'];
    }
    public withAssetSource(assetSource: CreateAssetReqAssetSourceEnum | string): CreateAssetReq {
        this['asset_source'] = assetSource;
        return this;
    }
    public set assetSource(assetSource: CreateAssetReqAssetSourceEnum | string  | undefined) {
        this['asset_source'] = assetSource;
    }
    public get assetSource(): CreateAssetReqAssetSourceEnum | string | undefined {
        return this['asset_source'];
    }
    public withAssetSourceType(assetSourceType: CreateAssetReqAssetSourceTypeEnum | string): CreateAssetReq {
        this['asset_source_type'] = assetSourceType;
        return this;
    }
    public set assetSourceType(assetSourceType: CreateAssetReqAssetSourceTypeEnum | string  | undefined) {
        this['asset_source_type'] = assetSourceType;
    }
    public get assetSourceType(): CreateAssetReqAssetSourceTypeEnum | string | undefined {
        return this['asset_source_type'];
    }
    public withAssetCode(assetCode: string): CreateAssetReq {
        this['asset_code'] = assetCode;
        return this;
    }
    public set assetCode(assetCode: string  | undefined) {
        this['asset_code'] = assetCode;
    }
    public get assetCode(): string | undefined {
        return this['asset_code'];
    }
    public withAssetDesc(assetDesc: string): CreateAssetReq {
        this['asset_desc'] = assetDesc;
        return this;
    }
    public set assetDesc(assetDesc: string  | undefined) {
        this['asset_desc'] = assetDesc;
    }
    public get assetDesc(): string | undefined {
        return this['asset_desc'];
    }
    public withAssetGroupDesc(assetGroupDesc: string): CreateAssetReq {
        this['asset_group_desc'] = assetGroupDesc;
        return this;
    }
    public set assetGroupDesc(assetGroupDesc: string  | undefined) {
        this['asset_group_desc'] = assetGroupDesc;
    }
    public get assetGroupDesc(): string | undefined {
        return this['asset_group_desc'];
    }
    public withAssetVersion(assetVersion: string): CreateAssetReq {
        this['asset_version'] = assetVersion;
        return this;
    }
    public set assetVersion(assetVersion: string  | undefined) {
        this['asset_version'] = assetVersion;
    }
    public get assetVersion(): string | undefined {
        return this['asset_version'];
    }
    public withSupportActions(supportActions: Array<string>): CreateAssetReq {
        this['support_actions'] = supportActions;
        return this;
    }
    public set supportActions(supportActions: Array<string>  | undefined) {
        this['support_actions'] = supportActions;
    }
    public get supportActions(): Array<string> | undefined {
        return this['support_actions'];
    }
    public withAssetLocation(assetLocation: string): CreateAssetReq {
        this['asset_location'] = assetLocation;
        return this;
    }
    public set assetLocation(assetLocation: string  | undefined) {
        this['asset_location'] = assetLocation;
    }
    public get assetLocation(): string | undefined {
        return this['asset_location'];
    }
    public withAssetType(assetType: CreateAssetReqAssetTypeEnum | string): CreateAssetReq {
        this['asset_type'] = assetType;
        return this;
    }
    public set assetType(assetType: CreateAssetReqAssetTypeEnum | string  | undefined) {
        this['asset_type'] = assetType;
    }
    public get assetType(): CreateAssetReqAssetTypeEnum | string | undefined {
        return this['asset_type'];
    }
    public withAssetGroupId(assetGroupId: string): CreateAssetReq {
        this['asset_group_id'] = assetGroupId;
        return this;
    }
    public set assetGroupId(assetGroupId: string  | undefined) {
        this['asset_group_id'] = assetGroupId;
    }
    public get assetGroupId(): string | undefined {
        return this['asset_group_id'];
    }
    public withAssetSeries(assetSeries: string): CreateAssetReq {
        this['asset_series'] = assetSeries;
        return this;
    }
    public set assetSeries(assetSeries: string  | undefined) {
        this['asset_series'] = assetSeries;
    }
    public get assetSeries(): string | undefined {
        return this['asset_series'];
    }
    public withAssetCapabilities(assetCapabilities: Array<string>): CreateAssetReq {
        this['asset_capabilities'] = assetCapabilities;
        return this;
    }
    public set assetCapabilities(assetCapabilities: Array<string>  | undefined) {
        this['asset_capabilities'] = assetCapabilities;
    }
    public get assetCapabilities(): Array<string> | undefined {
        return this['asset_capabilities'];
    }
    public withActions(actions: Array<AssetActionReq>): CreateAssetReq {
        this['actions'] = actions;
        return this;
    }
    public withSourceOperation(sourceOperation: string): CreateAssetReq {
        this['source_operation'] = sourceOperation;
        return this;
    }
    public set sourceOperation(sourceOperation: string  | undefined) {
        this['source_operation'] = sourceOperation;
    }
    public get sourceOperation(): string | undefined {
        return this['source_operation'];
    }
    public withSourceJobName(sourceJobName: string): CreateAssetReq {
        this['source_job_name'] = sourceJobName;
        return this;
    }
    public set sourceJobName(sourceJobName: string  | undefined) {
        this['source_job_name'] = sourceJobName;
    }
    public get sourceJobName(): string | undefined {
        return this['source_job_name'];
    }
    public withSourceJobId(sourceJobId: string): CreateAssetReq {
        this['source_job_id'] = sourceJobId;
        return this;
    }
    public set sourceJobId(sourceJobId: string  | undefined) {
        this['source_job_id'] = sourceJobId;
    }
    public get sourceJobId(): string | undefined {
        return this['source_job_id'];
    }
    public withStatus(status: CreateAssetReqStatusEnum | string): CreateAssetReq {
        this['status'] = status;
        return this;
    }
    public withDatasetUsage(datasetUsage: string): CreateAssetReq {
        this['dataset_usage'] = datasetUsage;
        return this;
    }
    public set datasetUsage(datasetUsage: string  | undefined) {
        this['dataset_usage'] = datasetUsage;
    }
    public get datasetUsage(): string | undefined {
        return this['dataset_usage'];
    }
    public withDatasetFileFormats(datasetFileFormats: Array<string>): CreateAssetReq {
        this['dataset_file_formats'] = datasetFileFormats;
        return this;
    }
    public set datasetFileFormats(datasetFileFormats: Array<string>  | undefined) {
        this['dataset_file_formats'] = datasetFileFormats;
    }
    public get datasetFileFormats(): Array<string> | undefined {
        return this['dataset_file_formats'];
    }
    public withDatasetType(datasetType: string): CreateAssetReq {
        this['dataset_type'] = datasetType;
        return this;
    }
    public set datasetType(datasetType: string  | undefined) {
        this['dataset_type'] = datasetType;
    }
    public get datasetType(): string | undefined {
        return this['dataset_type'];
    }
    public withDatasetSubType(datasetSubType: string): CreateAssetReq {
        this['dataset_sub_type'] = datasetSubType;
        return this;
    }
    public set datasetSubType(datasetSubType: string  | undefined) {
        this['dataset_sub_type'] = datasetSubType;
    }
    public get datasetSubType(): string | undefined {
        return this['dataset_sub_type'];
    }
    public withDatasetSchemaFormat(datasetSchemaFormat: string): CreateAssetReq {
        this['dataset_schema_format'] = datasetSchemaFormat;
        return this;
    }
    public set datasetSchemaFormat(datasetSchemaFormat: string  | undefined) {
        this['dataset_schema_format'] = datasetSchemaFormat;
    }
    public get datasetSchemaFormat(): string | undefined {
        return this['dataset_schema_format'];
    }
    public withImportFileSource(importFileSource: CreateAssetReqImportFileSourceEnum | string): CreateAssetReq {
        this['import_file_source'] = importFileSource;
        return this;
    }
    public set importFileSource(importFileSource: CreateAssetReqImportFileSourceEnum | string  | undefined) {
        this['import_file_source'] = importFileSource;
    }
    public get importFileSource(): CreateAssetReqImportFileSourceEnum | string | undefined {
        return this['import_file_source'];
    }
    public withDataSourceId(dataSourceId: string): CreateAssetReq {
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

/**
    * @export
    * @enum {string}
    */
export enum CreateAssetReqAssetSourceEnum {
    PUBLISH = 'Publish',
    IMPORT = 'Import'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateAssetReqAssetSourceTypeEnum {
    PRESET_TRAIN = 'preset_train',
    CUSTOM_TRAIN = 'custom_train',
    AGENTICRL = 'AgenticRL',
    DATA_CLEANING = 'DATA_CLEANING',
    DATA_IMPORT = 'DATA_IMPORT',
    DATA_ANNOTATION = 'DATA_ANNOTATION'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateAssetReqAssetTypeEnum {
    MODEL = 'MODEL',
    DATASET = 'DATASET',
    TEMPLATE = 'TEMPLATE',
    WORKFLOW = 'WORKFLOW',
    IMAGE = 'IMAGE',
    ALGORITHM = 'ALGORITHM',
    DATASET_TEMPLATE = 'DATASET_TEMPLATE',
    DATA_OPERATOR = 'DATA_OPERATOR'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateAssetReqStatusEnum {
    ONLINE = 'online',
    OFFLINE = 'offline',
    WAITING = 'waiting'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateAssetReqImportFileSourceEnum {
    OBS = 'OBS',
    LOCAL = 'LOCAL',
    AIDATALAKE = 'AIDATALAKE'
}
