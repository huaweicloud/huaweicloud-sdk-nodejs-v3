import { Thumbnail } from './Thumbnail';


export class AssetProcessReq {
    private 'asset_id': string | undefined;
    private 'template_group_name'?: string | undefined;
    private 'auto_encrypt'?: number | undefined;
    public thumbnail?: Thumbnail;
    private 'subtitle_id'?: Array<number> | undefined;
    public constructor(assetId?: any) { 
        this['asset_id'] = assetId;
    }
    public withAssetId(assetId: string): AssetProcessReq {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId() {
        return this['asset_id'];
    }
    public withTemplateGroupName(templateGroupName: string): AssetProcessReq {
        this['template_group_name'] = templateGroupName;
        return this;
    }
    public set templateGroupName(templateGroupName: string | undefined) {
        this['template_group_name'] = templateGroupName;
    }
    public get templateGroupName() {
        return this['template_group_name'];
    }
    public withAutoEncrypt(autoEncrypt: number): AssetProcessReq {
        this['auto_encrypt'] = autoEncrypt;
        return this;
    }
    public set autoEncrypt(autoEncrypt: number | undefined) {
        this['auto_encrypt'] = autoEncrypt;
    }
    public get autoEncrypt() {
        return this['auto_encrypt'];
    }
    public withThumbnail(thumbnail: Thumbnail): AssetProcessReq {
        this['thumbnail'] = thumbnail;
        return this;
    }
    public withSubtitleId(subtitleId: Array<number>): AssetProcessReq {
        this['subtitle_id'] = subtitleId;
        return this;
    }
    public set subtitleId(subtitleId: Array<number> | undefined) {
        this['subtitle_id'] = subtitleId;
    }
    public get subtitleId() {
        return this['subtitle_id'];
    }
}