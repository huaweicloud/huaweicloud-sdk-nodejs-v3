
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteAssetResponse extends SdkResponse {
    public code?: string;
    public data?: object;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): DeleteAssetResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: object): DeleteAssetResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): DeleteAssetResponse {
        this['message'] = message;
        return this;
    }
}