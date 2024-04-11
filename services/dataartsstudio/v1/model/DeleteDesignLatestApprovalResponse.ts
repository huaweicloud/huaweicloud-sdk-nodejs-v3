
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteDesignLatestApprovalResponse extends SdkResponse {
    public data?: object;
    public constructor() { 
        super();
    }
    public withData(data: object): DeleteDesignLatestApprovalResponse {
        this['data'] = data;
        return this;
    }
}