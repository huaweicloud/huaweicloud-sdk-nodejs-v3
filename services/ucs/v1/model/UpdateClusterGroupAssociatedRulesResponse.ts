
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateClusterGroupAssociatedRulesResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): UpdateClusterGroupAssociatedRulesResponse {
        this['body'] = body;
        return this;
    }
}