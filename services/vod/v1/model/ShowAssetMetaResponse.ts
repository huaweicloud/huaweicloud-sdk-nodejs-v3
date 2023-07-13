import { AssetInfo } from './AssetInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAssetMetaResponse extends SdkResponse {
    private 'asset_info_array'?: Array<AssetInfo> | undefined;
    private 'is_truncated'?: number | undefined;
    public total?: number;
    public constructor() { 
        super();
    }
    public withAssetInfoArray(assetInfoArray: Array<AssetInfo>): ShowAssetMetaResponse {
        this['asset_info_array'] = assetInfoArray;
        return this;
    }
    public set assetInfoArray(assetInfoArray: Array<AssetInfo> | undefined) {
        this['asset_info_array'] = assetInfoArray;
    }
    public get assetInfoArray() {
        return this['asset_info_array'];
    }
    public withIsTruncated(isTruncated: number): ShowAssetMetaResponse {
        this['is_truncated'] = isTruncated;
        return this;
    }
    public set isTruncated(isTruncated: number | undefined) {
        this['is_truncated'] = isTruncated;
    }
    public get isTruncated() {
        return this['is_truncated'];
    }
    public withTotal(total: number): ShowAssetMetaResponse {
        this['total'] = total;
        return this;
    }
}