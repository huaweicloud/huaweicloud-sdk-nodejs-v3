
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteClusterGroupResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): DeleteClusterGroupResponse {
        this['body'] = body;
        return this;
    }
}