
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteRecyclingJobsResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): DeleteRecyclingJobsResponse {
        this['status'] = status;
        return this;
    }
}