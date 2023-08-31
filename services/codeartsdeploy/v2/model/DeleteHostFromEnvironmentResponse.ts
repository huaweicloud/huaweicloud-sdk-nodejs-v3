
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteHostFromEnvironmentResponse extends SdkResponse {
    public status?: string;
    public result?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): DeleteHostFromEnvironmentResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: string): DeleteHostFromEnvironmentResponse {
        this['result'] = result;
        return this;
    }
}