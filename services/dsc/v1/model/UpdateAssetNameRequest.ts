import { AssetNameRequest } from './AssetNameRequest';


export class UpdateAssetNameRequest {
    private 'asset_id'?: string;
    public body?: AssetNameRequest;
    public constructor(assetId?: string) { 
        this['asset_id'] = assetId;
    }
    public withAssetId(assetId: string): UpdateAssetNameRequest {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withBody(body: AssetNameRequest): UpdateAssetNameRequest {
        this['body'] = body;
        return this;
    }
}