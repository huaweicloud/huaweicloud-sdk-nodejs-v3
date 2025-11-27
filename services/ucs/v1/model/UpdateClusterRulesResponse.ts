
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateClusterRulesResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): UpdateClusterRulesResponse {
        this['body'] = body;
        return this;
    }
}