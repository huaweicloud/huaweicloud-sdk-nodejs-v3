
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetTransferPolicyResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): SetTransferPolicyResponse {
        this['body'] = body;
        return this;
    }
}