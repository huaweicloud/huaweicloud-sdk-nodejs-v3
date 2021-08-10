import { AssetSummary } from './AssetSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAssetListResponse extends SdkResponse {
    public total?: number;
    public assets?: Array<AssetSummary>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListAssetListResponse {
        this['total'] = total;
        return this;
    }
    public withAssets(assets: Array<AssetSummary>): ListAssetListResponse {
        this['assets'] = assets;
        return this;
    }
}