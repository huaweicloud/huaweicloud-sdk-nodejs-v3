import { DigitalAssetSummary } from './DigitalAssetSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAssetSummaryResponse extends SdkResponse {
    private 'asset_list'?: Array<DigitalAssetSummary>;
    public constructor() { 
        super();
    }
    public withAssetList(assetList: Array<DigitalAssetSummary>): ListAssetSummaryResponse {
        this['asset_list'] = assetList;
        return this;
    }
    public set assetList(assetList: Array<DigitalAssetSummary>  | undefined) {
        this['asset_list'] = assetList;
    }
    public get assetList(): Array<DigitalAssetSummary> | undefined {
        return this['asset_list'];
    }
}