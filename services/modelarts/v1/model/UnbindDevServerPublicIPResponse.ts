
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UnbindDevServerPublicIPResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): UnbindDevServerPublicIPResponse {
        this['body'] = body;
        return this;
    }
}