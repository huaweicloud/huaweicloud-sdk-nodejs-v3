import { AssetInfoResponseBody } from './AssetInfoResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateConnectionResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public asset?: AssetInfoResponseBody;
    public constructor() { 
        super();
    }
    public withCode(code: string): UpdateConnectionResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): UpdateConnectionResponse {
        this['message'] = message;
        return this;
    }
    public withAsset(asset: AssetInfoResponseBody): UpdateConnectionResponse {
        this['asset'] = asset;
        return this;
    }
}