

export class BindAssetResourceReq {
    private 'asset_id'?: string;
    private 'business_type'?: string;
    public constructor() { 
    }
    public withAssetId(assetId: string): BindAssetResourceReq {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withBusinessType(businessType: string): BindAssetResourceReq {
        this['business_type'] = businessType;
        return this;
    }
    public set businessType(businessType: string  | undefined) {
        this['business_type'] = businessType;
    }
    public get businessType(): string | undefined {
        return this['business_type'];
    }
}