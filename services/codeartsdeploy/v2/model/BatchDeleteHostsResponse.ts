
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteHostsResponse extends SdkResponse {
    public status?: string;
    public result?: Array<string>;
    public constructor() { 
        super();
    }
    public withStatus(status: string): BatchDeleteHostsResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: Array<string>): BatchDeleteHostsResponse {
        this['result'] = result;
        return this;
    }
}