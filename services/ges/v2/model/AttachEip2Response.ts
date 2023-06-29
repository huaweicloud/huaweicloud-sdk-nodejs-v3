
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AttachEip2Response extends SdkResponse {
    public body?: { [key: string]: string; };
    public constructor() { 
        super();
    }
    public withBody(body: { [key: string]: string; }): AttachEip2Response {
        this['body'] = body;
        return this;
    }
}