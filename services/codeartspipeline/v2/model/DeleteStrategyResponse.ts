
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteStrategyResponse extends SdkResponse {
    public status?: boolean;
    public constructor() { 
        super();
    }
    public withStatus(status: boolean): DeleteStrategyResponse {
        this['status'] = status;
        return this;
    }
}