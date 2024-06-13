import { AssetExtraMeta } from './AssetExtraMeta';
import { AssetFileInfo } from './AssetFileInfo';
import { SystemProperty } from './SystemProperty';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDigitalAssetResponse extends SdkResponse {
    private 'project_id'?: string;
    private 'asset_id'?: string;
    private 'asset_name'?: string;
    private 'asset_description'?: string;
    private 'app_user_id'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'asset_type'?: UpdateDigitalAssetResponseAssetTypeEnum | string;
    private 'asset_state'?: UpdateDigitalAssetResponseAssetStateEnum | string;
    private 'fail_type'?: UpdateDigitalAssetResponseFailTypeEnum | string;
    public reason?: string;
    public tags?: Array<string>;
    private 'asset_extra_meta'?: AssetExtraMeta;
    private 'system_properties'?: Array<SystemProperty>;
    public files?: Array<AssetFileInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withProjectId(projectId: string): UpdateDigitalAssetResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withAssetId(assetId: string): UpdateDigitalAssetResponse {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withAssetName(assetName: string): UpdateDigitalAssetResponse {
        this['asset_name'] = assetName;
        return this;
    }
    public set assetName(assetName: string  | undefined) {
        this['asset_name'] = assetName;
    }
    public get assetName(): string | undefined {
        return this['asset_name'];
    }
    public withAssetDescription(assetDescription: string): UpdateDigitalAssetResponse {
        this['asset_description'] = assetDescription;
        return this;
    }
    public set assetDescription(assetDescription: string  | undefined) {
        this['asset_description'] = assetDescription;
    }
    public get assetDescription(): string | undefined {
        return this['asset_description'];
    }
    public withAppUserId(appUserId: string): UpdateDigitalAssetResponse {
        this['app_user_id'] = appUserId;
        return this;
    }
    public set appUserId(appUserId: string  | undefined) {
        this['app_user_id'] = appUserId;
    }
    public get appUserId(): string | undefined {
        return this['app_user_id'];
    }
    public withCreateTime(createTime: string): UpdateDigitalAssetResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): UpdateDigitalAssetResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withAssetType(assetType: UpdateDigitalAssetResponseAssetTypeEnum | string): UpdateDigitalAssetResponse {
        this['asset_type'] = assetType;
        return this;
    }
    public set assetType(assetType: UpdateDigitalAssetResponseAssetTypeEnum | string  | undefined) {
        this['asset_type'] = assetType;
    }
    public get assetType(): UpdateDigitalAssetResponseAssetTypeEnum | string | undefined {
        return this['asset_type'];
    }
    public withAssetState(assetState: UpdateDigitalAssetResponseAssetStateEnum | string): UpdateDigitalAssetResponse {
        this['asset_state'] = assetState;
        return this;
    }
    public set assetState(assetState: UpdateDigitalAssetResponseAssetStateEnum | string  | undefined) {
        this['asset_state'] = assetState;
    }
    public get assetState(): UpdateDigitalAssetResponseAssetStateEnum | string | undefined {
        return this['asset_state'];
    }
    public withFailType(failType: UpdateDigitalAssetResponseFailTypeEnum | string): UpdateDigitalAssetResponse {
        this['fail_type'] = failType;
        return this;
    }
    public set failType(failType: UpdateDigitalAssetResponseFailTypeEnum | string  | undefined) {
        this['fail_type'] = failType;
    }
    public get failType(): UpdateDigitalAssetResponseFailTypeEnum | string | undefined {
        return this['fail_type'];
    }
    public withReason(reason: string): UpdateDigitalAssetResponse {
        this['reason'] = reason;
        return this;
    }
    public withTags(tags: Array<string>): UpdateDigitalAssetResponse {
        this['tags'] = tags;
        return this;
    }
    public withAssetExtraMeta(assetExtraMeta: AssetExtraMeta): UpdateDigitalAssetResponse {
        this['asset_extra_meta'] = assetExtraMeta;
        return this;
    }
    public set assetExtraMeta(assetExtraMeta: AssetExtraMeta  | undefined) {
        this['asset_extra_meta'] = assetExtraMeta;
    }
    public get assetExtraMeta(): AssetExtraMeta | undefined {
        return this['asset_extra_meta'];
    }
    public withSystemProperties(systemProperties: Array<SystemProperty>): UpdateDigitalAssetResponse {
        this['system_properties'] = systemProperties;
        return this;
    }
    public set systemProperties(systemProperties: Array<SystemProperty>  | undefined) {
        this['system_properties'] = systemProperties;
    }
    public get systemProperties(): Array<SystemProperty> | undefined {
        return this['system_properties'];
    }
    public withFiles(files: Array<AssetFileInfo>): UpdateDigitalAssetResponse {
        this['files'] = files;
        return this;
    }
    public withXRequestId(xRequestId: string): UpdateDigitalAssetResponse {
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
export enum UpdateDigitalAssetResponseAssetTypeEnum {
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
    MUSIC = 'MUSIC',
    AUDIO = 'AUDIO'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateDigitalAssetResponseAssetStateEnum {
    CREATING = 'CREATING',
    FAILED = 'FAILED',
    UNACTIVED = 'UNACTIVED',
    ACTIVED = 'ACTIVED',
    DELETING = 'DELETING',
    DELETED = 'DELETED',
    BLOCK = 'BLOCK'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateDigitalAssetResponseFailTypeEnum {
    AUTOMATIC_REVIEW_REJECT = 'AUTOMATIC_REVIEW_REJECT',
    MANUAL_REVIEW_REJECT = 'MANUAL_REVIEW_REJECT'
}
