
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAssetTreeResponse extends SdkResponse {
    public code?: string;
    public data?: object;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): UpdateAssetTreeResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: object): UpdateAssetTreeResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): UpdateAssetTreeResponse {
        this['message'] = message;
        return this;
    }
}