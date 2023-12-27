import { AssetExtraMeta } from './AssetExtraMeta';
import { AssetFileInfo } from './AssetFileInfo';
import { SystemProperty } from './SystemProperty';


export class DigitalAssetInfo {
    private 'asset_id'?: string;
    private 'asset_name'?: string;
    private 'asset_description'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'asset_type'?: DigitalAssetInfoAssetTypeEnum | string;
    private 'asset_state'?: DigitalAssetInfoAssetStateEnum | string;
    private 'fail_type'?: DigitalAssetInfoFailTypeEnum | string;
    public reason?: string;
    private 'is_need_generate_cover'?: boolean;
    public tags?: Array<string>;
    private 'asset_extra_meta'?: AssetExtraMeta;
    private 'system_properties'?: Array<SystemProperty>;
    public files?: Array<AssetFileInfo>;
    public constructor() { 
    }
    public withAssetId(assetId: string): DigitalAssetInfo {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withAssetName(assetName: string): DigitalAssetInfo {
        this['asset_name'] = assetName;
        return this;
    }
    public set assetName(assetName: string  | undefined) {
        this['asset_name'] = assetName;
    }
    public get assetName(): string | undefined {
        return this['asset_name'];
    }
    public withAssetDescription(assetDescription: string): DigitalAssetInfo {
        this['asset_description'] = assetDescription;
        return this;
    }
    public set assetDescription(assetDescription: string  | undefined) {
        this['asset_description'] = assetDescription;
    }
    public get assetDescription(): string | undefined {
        return this['asset_description'];
    }
    public withCreateTime(createTime: string): DigitalAssetInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): DigitalAssetInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withAssetType(assetType: DigitalAssetInfoAssetTypeEnum | string): DigitalAssetInfo {
        this['asset_type'] = assetType;
        return this;
    }
    public set assetType(assetType: DigitalAssetInfoAssetTypeEnum | string  | undefined) {
        this['asset_type'] = assetType;
    }
    public get assetType(): DigitalAssetInfoAssetTypeEnum | string | undefined {
        return this['asset_type'];
    }
    public withAssetState(assetState: DigitalAssetInfoAssetStateEnum | string): DigitalAssetInfo {
        this['asset_state'] = assetState;
        return this;
    }
    public set assetState(assetState: DigitalAssetInfoAssetStateEnum | string  | undefined) {
        this['asset_state'] = assetState;
    }
    public get assetState(): DigitalAssetInfoAssetStateEnum | string | undefined {
        return this['asset_state'];
    }
    public withFailType(failType: DigitalAssetInfoFailTypeEnum | string): DigitalAssetInfo {
        this['fail_type'] = failType;
        return this;
    }
    public set failType(failType: DigitalAssetInfoFailTypeEnum | string  | undefined) {
        this['fail_type'] = failType;
    }
    public get failType(): DigitalAssetInfoFailTypeEnum | string | undefined {
        return this['fail_type'];
    }
    public withReason(reason: string): DigitalAssetInfo {
        this['reason'] = reason;
        return this;
    }
    public withIsNeedGenerateCover(isNeedGenerateCover: boolean): DigitalAssetInfo {
        this['is_need_generate_cover'] = isNeedGenerateCover;
        return this;
    }
    public set isNeedGenerateCover(isNeedGenerateCover: boolean  | undefined) {
        this['is_need_generate_cover'] = isNeedGenerateCover;
    }
    public get isNeedGenerateCover(): boolean | undefined {
        return this['is_need_generate_cover'];
    }
    public withTags(tags: Array<string>): DigitalAssetInfo {
        this['tags'] = tags;
        return this;
    }
    public withAssetExtraMeta(assetExtraMeta: AssetExtraMeta): DigitalAssetInfo {
        this['asset_extra_meta'] = assetExtraMeta;
        return this;
    }
    public set assetExtraMeta(assetExtraMeta: AssetExtraMeta  | undefined) {
        this['asset_extra_meta'] = assetExtraMeta;
    }
    public get assetExtraMeta(): AssetExtraMeta | undefined {
        return this['asset_extra_meta'];
    }
    public withSystemProperties(systemProperties: Array<SystemProperty>): DigitalAssetInfo {
        this['system_properties'] = systemProperties;
        return this;
    }
    public set systemProperties(systemProperties: Array<SystemProperty>  | undefined) {
        this['system_properties'] = systemProperties;
    }
    public get systemProperties(): Array<SystemProperty> | undefined {
        return this['system_properties'];
    }
    public withFiles(files: Array<AssetFileInfo>): DigitalAssetInfo {
        this['files'] = files;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DigitalAssetInfoAssetTypeEnum {
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
export enum DigitalAssetInfoAssetStateEnum {
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
export enum DigitalAssetInfoFailTypeEnum {
    AUTOMATIC_REVIEW_REJECT = 'AUTOMATIC_REVIEW_REJECT',
    MANUAL_REVIEW_REJECT = 'MANUAL_REVIEW_REJECT'
}
