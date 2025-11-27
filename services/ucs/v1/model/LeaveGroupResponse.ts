
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class LeaveGroupResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): LeaveGroupResponse {
        this['body'] = body;
        return this;
    }
}