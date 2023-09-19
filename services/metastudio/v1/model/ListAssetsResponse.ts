import { DigitalAssetInfo } from './DigitalAssetInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAssetsResponse extends SdkResponse {
    public count?: number;
    public assets?: Array<DigitalAssetInfo>;
    private 'X-Request-Id'?: string;
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
    public withXRequestId(xRequestId: string): ListAssetsResponse {
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