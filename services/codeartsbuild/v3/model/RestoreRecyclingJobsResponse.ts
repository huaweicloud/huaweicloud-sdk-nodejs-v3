
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RestoreRecyclingJobsResponse extends SdkResponse {
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: string): RestoreRecyclingJobsResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): RestoreRecyclingJobsResponse {
        this['status'] = status;
        return this;
    }
}