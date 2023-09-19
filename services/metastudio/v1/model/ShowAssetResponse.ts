import { AssetExtraMeta } from './AssetExtraMeta';
import { AssetFileInfo } from './AssetFileInfo';
import { SystemProperty } from './SystemProperty';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAssetResponse extends SdkResponse {
    private 'asset_id'?: string;
    private 'asset_name'?: string;
    private 'asset_description'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'asset_type'?: ShowAssetResponseAssetTypeEnum | string;
    private 'asset_state'?: ShowAssetResponseAssetStateEnum | string;
    public tags?: Array<string>;
    private 'asset_extra_meta'?: AssetExtraMeta;
    private 'system_properties'?: Array<SystemProperty>;
    public files?: Array<AssetFileInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withAssetId(assetId: string): ShowAssetResponse {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withAssetName(assetName: string): ShowAssetResponse {
        this['asset_name'] = assetName;
        return this;
    }
    public set assetName(assetName: string  | undefined) {
        this['asset_name'] = assetName;
    }
    public get assetName(): string | undefined {
        return this['asset_name'];
    }
    public withAssetDescription(assetDescription: string): ShowAssetResponse {
        this['asset_description'] = assetDescription;
        return this;
    }
    public set assetDescription(assetDescription: string  | undefined) {
        this['asset_description'] = assetDescription;
    }
    public get assetDescription(): string | undefined {
        return this['asset_description'];
    }
    public withCreateTime(createTime: string): ShowAssetResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowAssetResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withAssetType(assetType: ShowAssetResponseAssetTypeEnum | string): ShowAssetResponse {
        this['asset_type'] = assetType;
        return this;
    }
    public set assetType(assetType: ShowAssetResponseAssetTypeEnum | string  | undefined) {
        this['asset_type'] = assetType;
    }
    public get assetType(): ShowAssetResponseAssetTypeEnum | string | undefined {
        return this['asset_type'];
    }
    public withAssetState(assetState: ShowAssetResponseAssetStateEnum | string): ShowAssetResponse {
        this['asset_state'] = assetState;
        return this;
    }
    public set assetState(assetState: ShowAssetResponseAssetStateEnum | string  | undefined) {
        this['asset_state'] = assetState;
    }
    public get assetState(): ShowAssetResponseAssetStateEnum | string | undefined {
        return this['asset_state'];
    }
    public withTags(tags: Array<string>): ShowAssetResponse {
        this['tags'] = tags;
        return this;
    }
    public withAssetExtraMeta(assetExtraMeta: AssetExtraMeta): ShowAssetResponse {
        this['asset_extra_meta'] = assetExtraMeta;
        return this;
    }
    public set assetExtraMeta(assetExtraMeta: AssetExtraMeta  | undefined) {
        this['asset_extra_meta'] = assetExtraMeta;
    }
    public get assetExtraMeta(): AssetExtraMeta | undefined {
        return this['asset_extra_meta'];
    }
    public withSystemProperties(systemProperties: Array<SystemProperty>): ShowAssetResponse {
        this['system_properties'] = systemProperties;
        return this;
    }
    public set systemProperties(systemProperties: Array<SystemProperty>  | undefined) {
        this['system_properties'] = systemProperties;
    }
    public get systemProperties(): Array<SystemProperty> | undefined {
        return this['system_properties'];
    }
    public withFiles(files: Array<AssetFileInfo>): ShowAssetResponse {
        this['files'] = files;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowAssetResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAssetResponseAssetTypeEnum {
    HUMAN_MODEL = 'HUMAN_MODEL',
    VOICE_MODEL = 'VOICE_MODEL',
    SCENE = 'SCENE',
    ANIMATION = 'ANIMATION',
    VIDEO = 'VIDEO',
    IMAGE = 'IMAGE',
    PPT = 'PPT',
    MATERIAL = 'MATERIAL',
    NORMAL_MODEL = 'NORMAL_MODEL',
    COMMON_FILE = 'COMMON_FILE',
    HUMAN_MODEL_2D = 'HUMAN_MODEL_2D',
    BUSINESS_CARD_TEMPLET = 'BUSINESS_CARD_TEMPLET',
    MUSIC = 'MUSIC'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowAssetResponseAssetStateEnum {
    CREATING = 'CREATING',
    FAILED = 'FAILED',
    UNACTIVED = 'UNACTIVED',
    ACTIVED = 'ACTIVED',
    DELETING = 'DELETING',
    DELETED = 'DELETED',
    BLOCK = 'BLOCK'
}
