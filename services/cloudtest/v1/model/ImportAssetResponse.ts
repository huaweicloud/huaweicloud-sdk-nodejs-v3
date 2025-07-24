
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportAssetResponse extends SdkResponse {
    public code?: string;
    public data?: object;
    public message?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ImportAssetResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: object): ImportAssetResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): ImportAssetResponse {
        this['message'] = message;
        return this;
    }
}