
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAssetCipherResponse extends SdkResponse {
    private 'asset_id'?: string;
    public edk?: string;
    public dk?: string;
    public constructor() { 
        super();
    }
    public withAssetId(assetId: string): ShowAssetCipherResponse {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withEdk(edk: string): ShowAssetCipherResponse {
        this['edk'] = edk;
        return this;
    }
    public withDk(dk: string): ShowAssetCipherResponse {
        this['dk'] = dk;
        return this;
    }
}