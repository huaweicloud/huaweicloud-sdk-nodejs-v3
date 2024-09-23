import { AssetExtraMeta } from './AssetExtraMeta';
import { AssetSharedConfig } from './AssetSharedConfig';
import { ReviewConfig } from './ReviewConfig';
import { SupportedServiceEnum } from './SupportedServiceEnum';
import { SystemProperty } from './SystemProperty';


export class UpdateDigitalAssetRequestBody {
    private 'asset_name'?: string;
    private 'asset_description'?: string;
    private 'asset_type'?: UpdateDigitalAssetRequestBodyAssetTypeEnum | string;
    private 'asset_state'?: UpdateDigitalAssetRequestBodyAssetStateEnum | string;
    private 'review_config'?: ReviewConfig;
    public tags?: Array<string>;
    private 'asset_extra_meta'?: AssetExtraMeta;
    private 'system_properties'?: Array<SystemProperty>;
    private 'shared_config'?: AssetSharedConfig;
    private 'asset_order'?: number;
    private 'supported_service'?: Array<SupportedServiceEnum>;
    public constructor() { 
    }
    public withAssetName(assetName: string): UpdateDigitalAssetRequestBody {
        this['asset_name'] = assetName;
        return this;
    }
    public set assetName(assetName: string  | undefined) {
        this['asset_name'] = assetName;
    }
    public get assetName(): string | undefined {
        return this['asset_name'];
    }
    public withAssetDescription(assetDescription: string): UpdateDigitalAssetRequestBody {
        this['asset_description'] = assetDescription;
        return this;
    }
    public set assetDescription(assetDescription: string  | undefined) {
        this['asset_description'] = assetDescription;
    }
    public get assetDescription(): string | undefined {
        return this['asset_description'];
    }
    public withAssetType(assetType: UpdateDigitalAssetRequestBodyAssetTypeEnum | string): UpdateDigitalAssetRequestBody {
        this['asset_type'] = assetType;
        return this;
    }
    public set assetType(assetType: UpdateDigitalAssetRequestBodyAssetTypeEnum | string  | undefined) {
        this['asset_type'] = assetType;
    }
    public get assetType(): UpdateDigitalAssetRequestBodyAssetTypeEnum | string | undefined {
        return this['asset_type'];
    }
    public withAssetState(assetState: UpdateDigitalAssetRequestBodyAssetStateEnum | string): UpdateDigitalAssetRequestBody {
        this['asset_state'] = assetState;
        return this;
    }
    public set assetState(assetState: UpdateDigitalAssetRequestBodyAssetStateEnum | string  | undefined) {
        this['asset_state'] = assetState;
    }
    public get assetState(): UpdateDigitalAssetRequestBodyAssetStateEnum | string | undefined {
        return this['asset_state'];
    }
    public withReviewConfig(reviewConfig: ReviewConfig): UpdateDigitalAssetRequestBody {
        this['review_config'] = reviewConfig;
        return this;
    }
    public set reviewConfig(reviewConfig: ReviewConfig  | undefined) {
        this['review_config'] = reviewConfig;
    }
    public get reviewConfig(): ReviewConfig | undefined {
        return this['review_config'];
    }
    public withTags(tags: Array<string>): UpdateDigitalAssetRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withAssetExtraMeta(assetExtraMeta: AssetExtraMeta): UpdateDigitalAssetRequestBody {
        this['asset_extra_meta'] = assetExtraMeta;
        return this;
    }
    public set assetExtraMeta(assetExtraMeta: AssetExtraMeta  | undefined) {
        this['asset_extra_meta'] = assetExtraMeta;
    }
    public get assetExtraMeta(): AssetExtraMeta | undefined {
        return this['asset_extra_meta'];
    }
    public withSystemProperties(systemProperties: Array<SystemProperty>): UpdateDigitalAssetRequestBody {
        this['system_properties'] = systemProperties;
        return this;
    }
    public set systemProperties(systemProperties: Array<SystemProperty>  | undefined) {
        this['system_properties'] = systemProperties;
    }
    public get systemProperties(): Array<SystemProperty> | undefined {
        return this['system_properties'];
    }
    public withSharedConfig(sharedConfig: AssetSharedConfig): UpdateDigitalAssetRequestBody {
        this['shared_config'] = sharedConfig;
        return this;
    }
    public set sharedConfig(sharedConfig: AssetSharedConfig  | undefined) {
        this['shared_config'] = sharedConfig;
    }
    public get sharedConfig(): AssetSharedConfig | undefined {
        return this['shared_config'];
    }
    public withAssetOrder(assetOrder: number): UpdateDigitalAssetRequestBody {
        this['asset_order'] = assetOrder;
        return this;
    }
    public set assetOrder(assetOrder: number  | undefined) {
        this['asset_order'] = assetOrder;
    }
    public get assetOrder(): number | undefined {
        return this['asset_order'];
    }
    public withSupportedService(supportedService: Array<SupportedServiceEnum>): UpdateDigitalAssetRequestBody {
        this['supported_service'] = supportedService;
        return this;
    }
    public set supportedService(supportedService: Array<SupportedServiceEnum>  | undefined) {
        this['supported_service'] = supportedService;
    }
    public get supportedService(): Array<SupportedServiceEnum> | undefined {
        return this['supported_service'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateDigitalAssetRequestBodyAssetTypeEnum {
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
export enum UpdateDigitalAssetRequestBodyAssetStateEnum {
    UNACTIVED = 'UNACTIVED',
    ACTIVED = 'ACTIVED',
    WAITING_DELETE = 'WAITING_DELETE'
}
