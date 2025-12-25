import { AssetInfoResponseBody } from './AssetInfoResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateConnectionResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public asset?: AssetInfoResponseBody;
    public constructor() { 
        super();
    }
    public withCode(code: string): CreateConnectionResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): CreateConnectionResponse {
        this['message'] = message;
        return this;
    }
    public withAsset(asset: AssetInfoResponseBody): CreateConnectionResponse {
        this['asset'] = asset;
        return this;
    }
}