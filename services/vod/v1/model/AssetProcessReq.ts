import { Thumbnail } from './Thumbnail';


export class AssetProcessReq {
    private 'asset_id'?: string;
    private 'template_group_name'?: string;
    private 'auto_encrypt'?: number;
    public thumbnail?: Thumbnail;
    private 'subtitle_id'?: Array<number>;
    public constructor(assetId?: string) { 
        this['asset_id'] = assetId;
    }
    public withAssetId(assetId: string): AssetProcessReq {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withTemplateGroupName(templateGroupName: string): AssetProcessReq {
        this['template_group_name'] = templateGroupName;
        return this;
    }
    public set templateGroupName(templateGroupName: string  | undefined) {
        this['template_group_name'] = templateGroupName;
    }
    public get templateGroupName(): string | undefined {
        return this['template_group_name'];
    }
    public withAutoEncrypt(autoEncrypt: number): AssetProcessReq {
        this['auto_encrypt'] = autoEncrypt;
        return this;
    }
    public set autoEncrypt(autoEncrypt: number  | undefined) {
        this['auto_encrypt'] = autoEncrypt;
    }
    public get autoEncrypt(): number | undefined {
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
    public set subtitleId(subtitleId: Array<number>  | undefined) {
        this['subtitle_id'] = subtitleId;
    }
    public get subtitleId(): Array<number> | undefined {
        return this['subtitle_id'];
    }
}