import { AssetDetail } from './AssetDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAssetResponse extends SdkResponse {
    private 'total_count'?: number;
    public data?: Array<AssetDetail>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListAssetResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withData(data: Array<AssetDetail>): ListAssetResponse {
        this['data'] = data;
        return this;
    }
}