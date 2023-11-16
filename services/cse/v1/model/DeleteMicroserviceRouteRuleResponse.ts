
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteMicroserviceRouteRuleResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): DeleteMicroserviceRouteRuleResponse {
        this['result'] = result;
        return this;
    }
}