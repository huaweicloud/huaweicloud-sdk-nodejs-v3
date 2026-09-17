
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class InvokeDeleteProxyResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): InvokeDeleteProxyResponse {
        this['body'] = body;
        return this;
    }
}