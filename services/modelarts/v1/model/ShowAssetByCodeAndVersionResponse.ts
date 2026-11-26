import { AssetActionRsp } from './AssetActionRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAssetByCodeAndVersionResponse extends SdkResponse {
    private 'asset_id'?: string;
    private 'parent_asset_id'?: string;
    private 'root_asset_id'?: string;
    private 'api_version'?: string;
    private 'asset_name'?: string;
    private 'asset_group_id'?: string;
    private 'workspace_id'?: string;
    private 'asset_type'?: string;
    private 'sub_asset_type'?: string;
    private 'asset_desc'?: string;
    private 'asset_code'?: string;
    private 'asset_version'?: string;
    public tags?: { [key: string]: Array<string>; };
    private 'support_actions'?: object;
    private 'asset_location'?: string;
    public actions?: Array<AssetActionRsp>;
    public status?: ShowAssetByCodeAndVersionResponseStatusEnum | string;
    private 'dataset_usage'?: string;
    private 'dataset_file_formats'?: Array<string>;
    private 'dataset_type'?: string;
    private 'dataset_sub_type'?: string;
    private 'dataset_schema_format'?: string;
    public constructor() { 
        super();
    }
    public withAssetId(assetId: string): ShowAssetByCodeAndVersionResponse {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withParentAssetId(parentAssetId: string): ShowAssetByCodeAndVersionResponse {
        this['parent_asset_id'] = parentAssetId;
        return this;
    }
    public set parentAssetId(parentAssetId: string  | undefined) {
        this['parent_asset_id'] = parentAssetId;
    }
    public get parentAssetId(): string | undefined {
        return this['parent_asset_id'];
    }
    public withRootAssetId(rootAssetId: string): ShowAssetByCodeAndVersionResponse {
        this['root_asset_id'] = rootAssetId;
        return this;
    }
    public set rootAssetId(rootAssetId: string  | undefined) {
        this['root_asset_id'] = rootAssetId;
    }
    public get rootAssetId(): string | undefined {
        return this['root_asset_id'];
    }
    public withApiVersion(apiVersion: string): ShowAssetByCodeAndVersionResponse {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: string  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): string | undefined {
        return this['api_version'];
    }
    public withAssetName(assetName: string): ShowAssetByCodeAndVersionResponse {
        this['asset_name'] = assetName;
        return this;
    }
    public set assetName(assetName: string  | undefined) {
        this['asset_name'] = assetName;
    }
    public get assetName(): string | undefined {
        return this['asset_name'];
    }
    public withAssetGroupId(assetGroupId: string): ShowAssetByCodeAndVersionResponse {
        this['asset_group_id'] = assetGroupId;
        return this;
    }
    public set assetGroupId(assetGroupId: string  | undefined) {
        this['asset_group_id'] = assetGroupId;
    }
    public get assetGroupId(): string | undefined {
        return this['asset_group_id'];
    }
    public withWorkspaceId(workspaceId: string): ShowAssetByCodeAndVersionResponse {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withAssetType(assetType: string): ShowAssetByCodeAndVersionResponse {
        this['asset_type'] = assetType;
        return this;
    }
    public set assetType(assetType: string  | undefined) {
        this['asset_type'] = assetType;
    }
    public get assetType(): string | undefined {
        return this['asset_type'];
    }
    public withSubAssetType(subAssetType: string): ShowAssetByCodeAndVersionResponse {
        this['sub_asset_type'] = subAssetType;
        return this;
    }
    public set subAssetType(subAssetType: string  | undefined) {
        this['sub_asset_type'] = subAssetType;
    }
    public get subAssetType(): string | undefined {
        return this['sub_asset_type'];
    }
    public withAssetDesc(assetDesc: string): ShowAssetByCodeAndVersionResponse {
        this['asset_desc'] = assetDesc;
        return this;
    }
    public set assetDesc(assetDesc: string  | undefined) {
        this['asset_desc'] = assetDesc;
    }
    public get assetDesc(): string | undefined {
        return this['asset_desc'];
    }
    public withAssetCode(assetCode: string): ShowAssetByCodeAndVersionResponse {
        this['asset_code'] = assetCode;
        return this;
    }
    public set assetCode(assetCode: string  | undefined) {
        this['asset_code'] = assetCode;
    }
    public get assetCode(): string | undefined {
        return this['asset_code'];
    }
    public withAssetVersion(assetVersion: string): ShowAssetByCodeAndVersionResponse {
        this['asset_version'] = assetVersion;
        return this;
    }
    public set assetVersion(assetVersion: string  | undefined) {
        this['asset_version'] = assetVersion;
    }
    public get assetVersion(): string | undefined {
        return this['asset_version'];
    }
    public withTags(tags: { [key: string]: Array<string>; }): ShowAssetByCodeAndVersionResponse {
        this['tags'] = tags;
        return this;
    }
    public withSupportActions(supportActions: object): ShowAssetByCodeAndVersionResponse {
        this['support_actions'] = supportActions;
        return this;
    }
    public set supportActions(supportActions: object  | undefined) {
        this['support_actions'] = supportActions;
    }
    public get supportActions(): object | undefined {
        return this['support_actions'];
    }
    public withAssetLocation(assetLocation: string): ShowAssetByCodeAndVersionResponse {
        this['asset_location'] = assetLocation;
        return this;
    }
    public set assetLocation(assetLocation: string  | undefined) {
        this['asset_location'] = assetLocation;
    }
    public get assetLocation(): string | undefined {
        return this['asset_location'];
    }
    public withActions(actions: Array<AssetActionRsp>): ShowAssetByCodeAndVersionResponse {
        this['actions'] = actions;
        return this;
    }
    public withStatus(status: ShowAssetByCodeAndVersionResponseStatusEnum | string): ShowAssetByCodeAndVersionResponse {
        this['status'] = status;
        return this;
    }
    public withDatasetUsage(datasetUsage: string): ShowAssetByCodeAndVersionResponse {
        this['dataset_usage'] = datasetUsage;
        return this;
    }
    public set datasetUsage(datasetUsage: string  | undefined) {
        this['dataset_usage'] = datasetUsage;
    }
    public get datasetUsage(): string | undefined {
        return this['dataset_usage'];
    }
    public withDatasetFileFormats(datasetFileFormats: Array<string>): ShowAssetByCodeAndVersionResponse {
        this['dataset_file_formats'] = datasetFileFormats;
        return this;
    }
    public set datasetFileFormats(datasetFileFormats: Array<string>  | undefined) {
        this['dataset_file_formats'] = datasetFileFormats;
    }
    public get datasetFileFormats(): Array<string> | undefined {
        return this['dataset_file_formats'];
    }
    public withDatasetType(datasetType: string): ShowAssetByCodeAndVersionResponse {
        this['dataset_type'] = datasetType;
        return this;
    }
    public set datasetType(datasetType: string  | undefined) {
        this['dataset_type'] = datasetType;
    }
    public get datasetType(): string | undefined {
        return this['dataset_type'];
    }
    public withDatasetSubType(datasetSubType: string): ShowAssetByCodeAndVersionResponse {
        this['dataset_sub_type'] = datasetSubType;
        return this;
    }
    public set datasetSubType(datasetSubType: string  | undefined) {
        this['dataset_sub_type'] = datasetSubType;
    }
    public get datasetSubType(): string | undefined {
        return this['dataset_sub_type'];
    }
    public withDatasetSchemaFormat(datasetSchemaFormat: string): ShowAssetByCodeAndVersionResponse {
        this['dataset_schema_format'] = datasetSchemaFormat;
        return this;
    }
    public set datasetSchemaFormat(datasetSchemaFormat: string  | undefined) {
        this['dataset_schema_format'] = datasetSchemaFormat;
    }
    public get datasetSchemaFormat(): string | undefined {
        return this['dataset_schema_format'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAssetByCodeAndVersionResponseStatusEnum {
    ONLINE = 'online',
    OFFLINE = 'offline',
    WAITING = 'waiting'
}
