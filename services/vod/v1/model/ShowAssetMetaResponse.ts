import { AssetInfo } from './AssetInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAssetMetaResponse extends SdkResponse {
    private 'asset_info_array'?: Array<AssetInfo>;
    private 'is_truncated'?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withAssetInfoArray(assetInfoArray: Array<AssetInfo>): ShowAssetMetaResponse {
        this['asset_info_array'] = assetInfoArray;
        return this;
    }
    public set assetInfoArray(assetInfoArray: Array<AssetInfo>  | undefined) {
        this['asset_info_array'] = assetInfoArray;
    }
    public get assetInfoArray(): Array<AssetInfo> | undefined {
        return this['asset_info_array'];
    }
    public withIsTruncated(isTruncated: number): ShowAssetMetaResponse {
        this['is_truncated'] = isTruncated;
        return this;
    }
    public set isTruncated(isTruncated: number  | undefined) {
        this['is_truncated'] = isTruncated;
    }
    public get isTruncated(): number | undefined {
        return this['is_truncated'];
    }
    public withTotal(total: number): ShowAssetMetaResponse {
        this['total'] = total;
        return this;
    }
}