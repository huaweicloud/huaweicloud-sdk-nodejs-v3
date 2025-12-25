import { AssetInfoResponseBody } from './AssetInfoResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConnectionResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public asset?: AssetInfoResponseBody;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowConnectionResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ShowConnectionResponse {
        this['message'] = message;
        return this;
    }
    public withAsset(asset: AssetInfoResponseBody): ShowConnectionResponse {
        this['asset'] = asset;
        return this;
    }
}