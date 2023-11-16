
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteOpenSourceStrategyResponse extends SdkResponse {
    public status?: boolean;
    public constructor() { 
        super();
    }
    public withStatus(status: boolean): DeleteOpenSourceStrategyResponse {
        this['status'] = status;
        return this;
    }
}