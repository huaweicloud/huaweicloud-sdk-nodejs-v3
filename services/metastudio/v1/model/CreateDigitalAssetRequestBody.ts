import { AssetExtraMeta } from './AssetExtraMeta';
import { SystemProperty } from './SystemProperty';


export class CreateDigitalAssetRequestBody {
    private 'asset_name'?: string;
    private 'asset_description'?: string;
    private 'asset_type'?: CreateDigitalAssetRequestBodyAssetTypeEnum | string;
    private 'asset_owner'?: string;
    public tags?: Array<string>;
    private 'asset_extra_meta'?: AssetExtraMeta;
    private 'system_properties'?: Array<SystemProperty>;
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
    public withAssetOwner(assetOwner: string): CreateDigitalAssetRequestBody {
        this['asset_owner'] = assetOwner;
        return this;
    }
    public set assetOwner(assetOwner: string  | undefined) {
        this['asset_owner'] = assetOwner;
    }
    public get assetOwner(): string | undefined {
        return this['asset_owner'];
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
    public withSystemProperties(systemProperties: Array<SystemProperty>): CreateDigitalAssetRequestBody {
        this['system_properties'] = systemProperties;
        return this;
    }
    public set systemProperties(systemProperties: Array<SystemProperty>  | undefined) {
        this['system_properties'] = systemProperties;
    }
    public get systemProperties(): Array<SystemProperty> | undefined {
        return this['system_properties'];
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
    MUSIC = 'MUSIC'
}
