
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DetachEip2Response extends SdkResponse {
    public body?: { [key: string]: string; };
    public constructor() { 
        super();
    }
    public withBody(body: { [key: string]: string; }): DetachEip2Response {
        this['body'] = body;
        return this;
    }
}