import { OpenEntity } from './OpenEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBusinessAssetsResponse extends SdkResponse {
    public count?: number;
    public assets?: Array<OpenEntity>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ShowBusinessAssetsResponse {
        this['count'] = count;
        return this;
    }
    public withAssets(assets: Array<OpenEntity>): ShowBusinessAssetsResponse {
        this['assets'] = assets;
        return this;
    }
}