
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CopyHostsToTargetResponse extends SdkResponse {
    public status?: string;
    public result?: boolean;
    public constructor() { 
        super();
    }
    public withStatus(status: string): CopyHostsToTargetResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: boolean): CopyHostsToTargetResponse {
        this['result'] = result;
        return this;
    }
}