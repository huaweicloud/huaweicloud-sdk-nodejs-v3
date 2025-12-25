import { AssetInfoResponseBody } from './AssetInfoResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConnectionsResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public total?: number;
    public asset?: Array<AssetInfoResponseBody>;
    public constructor() { 
        super();
    }
    public withCode(code: string): ListConnectionsResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ListConnectionsResponse {
        this['message'] = message;
        return this;
    }
    public withTotal(total: number): ListConnectionsResponse {
        this['total'] = total;
        return this;
    }
    public withAsset(asset: Array<AssetInfoResponseBody>): ListConnectionsResponse {
        this['asset'] = asset;
        return this;
    }
}