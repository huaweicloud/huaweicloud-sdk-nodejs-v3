import { AssetActionResult } from './AssetActionResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchExecuteAssetActionResponse extends SdkResponse {
    public results?: Array<AssetActionResult>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withResults(results: Array<AssetActionResult>): BatchExecuteAssetActionResponse {
        this['results'] = results;
        return this;
    }
    public withXRequestId(xRequestId: string): BatchExecuteAssetActionResponse {
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