
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteAssetTreeResponse extends SdkResponse {
    public code?: string;
    public data?: object;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): DeleteAssetTreeResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: object): DeleteAssetTreeResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): DeleteAssetTreeResponse {
        this['message'] = message;
        return this;
    }
}