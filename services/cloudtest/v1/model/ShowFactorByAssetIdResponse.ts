
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFactorByAssetIdResponse extends SdkResponse {
    public code?: string;
    public data?: object;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowFactorByAssetIdResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: object): ShowFactorByAssetIdResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): ShowFactorByAssetIdResponse {
        this['message'] = message;
        return this;
    }
}