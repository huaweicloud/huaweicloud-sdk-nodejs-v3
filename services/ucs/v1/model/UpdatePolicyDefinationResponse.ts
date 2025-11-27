
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePolicyDefinationResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): UpdatePolicyDefinationResponse {
        this['body'] = body;
        return this;
    }
}