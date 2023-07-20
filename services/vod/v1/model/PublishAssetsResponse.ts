import { AssetInfo } from './AssetInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class PublishAssetsResponse extends SdkResponse {
    private 'asset_info_array'?: Array<AssetInfo>;
    public constructor() { 
        super();
    }
    public withAssetInfoArray(assetInfoArray: Array<AssetInfo>): PublishAssetsResponse {
        this['asset_info_array'] = assetInfoArray;
        return this;
    }
    public set assetInfoArray(assetInfoArray: Array<AssetInfo>  | undefined) {
        this['asset_info_array'] = assetInfoArray;
    }
    public get assetInfoArray(): Array<AssetInfo> | undefined {
        return this['asset_info_array'];
    }
}