
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteDeployKeyV2Response extends SdkResponse {
    public error?: Error;
    public result?: boolean;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): DeleteDeployKeyV2Response {
        this['error'] = error;
        return this;
    }
    public withResult(result: boolean): DeleteDeployKeyV2Response {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): DeleteDeployKeyV2Response {
        this['status'] = status;
        return this;
    }
}