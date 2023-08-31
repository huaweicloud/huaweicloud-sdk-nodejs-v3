
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportHostToEnvironmentResponse extends SdkResponse {
    public status?: string;
    public result?: Array<string>;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ImportHostToEnvironmentResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: Array<string>): ImportHostToEnvironmentResponse {
        this['result'] = result;
        return this;
    }
}