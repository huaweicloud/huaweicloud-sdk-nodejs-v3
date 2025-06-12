
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckJobCountIsTopLimitResponse extends SdkResponse {
    public status?: string;
    public error?: object;
    public result?: boolean;
    public constructor() { 
        super();
    }
    public withStatus(status: string): CheckJobCountIsTopLimitResponse {
        this['status'] = status;
        return this;
    }
    public withError(error: object): CheckJobCountIsTopLimitResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: boolean): CheckJobCountIsTopLimitResponse {
        this['result'] = result;
        return this;
    }
}