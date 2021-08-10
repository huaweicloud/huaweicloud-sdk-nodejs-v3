import { AssetInfo } from './AssetInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UnpublishAssetsResponse extends SdkResponse {
    private 'asset_info_array'?: Array<AssetInfo> | undefined;
    public constructor() { 
        super();
    }
    public withAssetInfoArray(assetInfoArray: Array<AssetInfo>): UnpublishAssetsResponse {
        this['asset_info_array'] = assetInfoArray;
        return this;
    }
    public set assetInfoArray(assetInfoArray: Array<AssetInfo> | undefined) {
        this['asset_info_array'] = assetInfoArray;
    }
    public get assetInfoArray() {
        return this['asset_info_array'];
    }
}