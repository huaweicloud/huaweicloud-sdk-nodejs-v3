
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteGroupResponse extends SdkResponse {
    public status?: string;
    public error?: object;
    public result?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): DeleteGroupResponse {
        this['status'] = status;
        return this;
    }
    public withError(error: object): DeleteGroupResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: string): DeleteGroupResponse {
        this['result'] = result;
        return this;
    }
}