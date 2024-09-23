import { AssetExtraMeta } from './AssetExtraMeta';
import { AssetSharedConfig } from './AssetSharedConfig';
import { ReviewConfig } from './ReviewConfig';
import { SupportedServiceEnum } from './SupportedServiceEnum';


export class CreateDigitalAssetRequestBody {
    private 'asset_name'?: string;
    private 'asset_description'?: string;
    private 'asset_type'?: CreateDigitalAssetRequestBodyAssetTypeEnum | string;
    private 'review_config'?: ReviewConfig;
    public tags?: Array<string>;
    private 'asset_extra_meta'?: AssetExtraMeta;
    private 'shared_config'?: AssetSharedConfig;
    private 'is_need_generate_cover'?: boolean;
    private 'asset_order'?: number;
    private 'supported_service'?: Array<SupportedServiceEnum>;
    public constructor(assetName?: string, assetType?: string) { 
        this['asset_name'] = assetName;
        this['asset_type'] = assetType;
    }
    public withAssetName(assetName: string): CreateDigitalAssetRequestBody {
        this['asset_name'] = assetName;
        return this;
    }
    public set assetName(assetName: string  | undefined) {
        this['asset_name'] = assetName;
    }
    public get assetName(): string | undefined {
        return this['asset_name'];
    }
    public withAssetDescription(assetDescription: string): CreateDigitalAssetRequestBody {
        this['asset_description'] = assetDescription;
        return this;
    }
    public set assetDescription(assetDescription: string  | undefined) {
        this['asset_description'] = assetDescription;
    }
    public get assetDescription(): string | undefined {
        return this['asset_description'];
    }
    public withAssetType(assetType: CreateDigitalAssetRequestBodyAssetTypeEnum | string): CreateDigitalAssetRequestBody {
        this['asset_type'] = assetType;
        return this;
    }
    public set assetType(assetType: CreateDigitalAssetRequestBodyAssetTypeEnum | string  | undefined) {
        this['asset_type'] = assetType;
    }
    public get assetType(): CreateDigitalAssetRequestBodyAssetTypeEnum | string | undefined {
        return this['asset_type'];
    }
    public withReviewConfig(reviewConfig: ReviewConfig): CreateDigitalAssetRequestBody {
        this['review_config'] = reviewConfig;
        return this;
    }
    public set reviewConfig(reviewConfig: ReviewConfig  | undefined) {
        this['review_config'] = reviewConfig;
    }
    public get reviewConfig(): ReviewConfig | undefined {
        return this['review_config'];
    }
    public withTags(tags: Array<string>): CreateDigitalAssetRequestBody {
        this['tags'] = tags;
        return this;
    }
    public withAssetExtraMeta(assetExtraMeta: AssetExtraMeta): CreateDigitalAssetRequestBody {
        this['asset_extra_meta'] = assetExtraMeta;
        return this;
    }
    public set assetExtraMeta(assetExtraMeta: AssetExtraMeta  | undefined) {
        this['asset_extra_meta'] = assetExtraMeta;
    }
    public get assetExtraMeta(): AssetExtraMeta | undefined {
        return this['asset_extra_meta'];
    }
    public withSharedConfig(sharedConfig: AssetSharedConfig): CreateDigitalAssetRequestBody {
        this['shared_config'] = sharedConfig;
        return this;
    }
    public set sharedConfig(sharedConfig: AssetSharedConfig  | undefined) {
        this['shared_config'] = sharedConfig;
    }
    public get sharedConfig(): AssetSharedConfig | undefined {
        return this['shared_config'];
    }
    public withIsNeedGenerateCover(isNeedGenerateCover: boolean): CreateDigitalAssetRequestBody {
        this['is_need_generate_cover'] = isNeedGenerateCover;
        return this;
    }
    public set isNeedGenerateCover(isNeedGenerateCover: boolean  | undefined) {
        this['is_need_generate_cover'] = isNeedGenerateCover;
    }
    public get isNeedGenerateCover(): boolean | undefined {
        return this['is_need_generate_cover'];
    }
    public withAssetOrder(assetOrder: number): CreateDigitalAssetRequestBody {
        this['asset_order'] = assetOrder;
        return this;
    }
    public set assetOrder(assetOrder: number  | undefined) {
        this['asset_order'] = assetOrder;
    }
    public get assetOrder(): number | undefined {
        return this['asset_order'];
    }
    public withSupportedService(supportedService: Array<SupportedServiceEnum>): CreateDigitalAssetRequestBody {
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
export enum CreateDigitalAssetRequestBodyAssetTypeEnum {
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
