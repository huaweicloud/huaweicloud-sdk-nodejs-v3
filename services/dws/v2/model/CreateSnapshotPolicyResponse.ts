
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSnapshotPolicyResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): CreateSnapshotPolicyResponse {
        this['body'] = body;
        return this;
    }
}