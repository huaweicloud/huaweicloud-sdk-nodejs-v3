
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteRoutingBacklogPolicyResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): DeleteRoutingBacklogPolicyResponse {
        this['body'] = body;
        return this;
    }
}