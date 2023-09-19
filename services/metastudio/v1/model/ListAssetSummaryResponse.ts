import { DigitalAssetSummary } from './DigitalAssetSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAssetSummaryResponse extends SdkResponse {
    private 'asset_list'?: Array<DigitalAssetSummary>;
    private 'X-Request-Id'?: string;
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
    public withXRequestId(xRequestId: string): ListAssetSummaryResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}