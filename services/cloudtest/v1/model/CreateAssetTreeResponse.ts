
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAssetTreeResponse extends SdkResponse {
    public code?: string;
    public data?: object;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): CreateAssetTreeResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: object): CreateAssetTreeResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): CreateAssetTreeResponse {
        this['message'] = message;
        return this;
    }
}