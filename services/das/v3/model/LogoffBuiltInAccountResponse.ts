
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class LogoffBuiltInAccountResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): LogoffBuiltInAccountResponse {
        this['body'] = body;
        return this;
    }
}