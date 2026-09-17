
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class InvokePostProxyResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): InvokePostProxyResponse {
        this['body'] = body;
        return this;
    }
}