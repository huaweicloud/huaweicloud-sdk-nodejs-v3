
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ClearRecyclingJobsResponse extends SdkResponse {
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: string): ClearRecyclingJobsResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ClearRecyclingJobsResponse {
        this['status'] = status;
        return this;
    }
}