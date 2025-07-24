
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAssetTreeResponse extends SdkResponse {
    public code?: string;
    public data?: object;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowAssetTreeResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: object): ShowAssetTreeResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): ShowAssetTreeResponse {
        this['message'] = message;
        return this;
    }
}