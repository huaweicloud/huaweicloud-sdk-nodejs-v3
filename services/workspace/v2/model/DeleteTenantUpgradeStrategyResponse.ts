
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteTenantUpgradeStrategyResponse extends SdkResponse {
    public body?: object;
    public constructor() { 
        super();
    }
    public withBody(body: object): DeleteTenantUpgradeStrategyResponse {
        this['body'] = body;
        return this;
    }
}