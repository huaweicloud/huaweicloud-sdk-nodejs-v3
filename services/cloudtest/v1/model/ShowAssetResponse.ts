import { Asset } from './Asset';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAssetResponse extends SdkResponse {
    public code?: string;
    public data?: Array<Asset>;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowAssetResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: Array<Asset>): ShowAssetResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): ShowAssetResponse {
        this['message'] = message;
        return this;
    }
}