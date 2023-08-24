import { DigitalAssetInfo } from './DigitalAssetInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAssetsResponse extends SdkResponse {
    public count?: number;
    public assets?: Array<DigitalAssetInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListAssetsResponse {
        this['count'] = count;
        return this;
    }
    public withAssets(assets: Array<DigitalAssetInfo>): ListAssetsResponse {
        this['assets'] = assets;
        return this;
    }
}