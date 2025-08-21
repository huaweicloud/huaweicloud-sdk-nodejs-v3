
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddSubmoduleResponse extends SdkResponse {
    public result?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): AddSubmoduleResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): AddSubmoduleResponse {
        this['status'] = status;
        return this;
    }
}