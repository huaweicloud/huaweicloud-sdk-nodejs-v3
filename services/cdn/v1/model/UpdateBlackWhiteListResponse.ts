
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateBlackWhiteListResponse extends SdkResponse {
    public code?: string;
    public result?: string;
    public data?: object;
    public constructor() { 
        super();
    }
    public withCode(code: string): UpdateBlackWhiteListResponse {
        this['code'] = code;
        return this;
    }
    public withResult(result: string): UpdateBlackWhiteListResponse {
        this['result'] = result;
        return this;
    }
    public withData(data: object): UpdateBlackWhiteListResponse {
        this['data'] = data;
        return this;
    }
}