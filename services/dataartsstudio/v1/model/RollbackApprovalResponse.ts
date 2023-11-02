
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RollbackApprovalResponse extends SdkResponse {
    public data?: object;
    public constructor() { 
        super();
    }
    public withData(data: object): RollbackApprovalResponse {
        this['data'] = data;
        return this;
    }
}