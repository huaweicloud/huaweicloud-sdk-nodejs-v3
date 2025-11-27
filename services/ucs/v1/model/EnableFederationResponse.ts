
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class EnableFederationResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): EnableFederationResponse {
        this['body'] = body;
        return this;
    }
}