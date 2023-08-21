
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteDashboardResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): DeleteDashboardResponse {
        this['result'] = result;
        return this;
    }
}