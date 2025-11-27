
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class JoinGroupResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): JoinGroupResponse {
        this['body'] = body;
        return this;
    }
}