
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRepoBranchResponse extends SdkResponse {
    public status?: string;
    public result?: Array<string>;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListRepoBranchResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: Array<string>): ListRepoBranchResponse {
        this['result'] = result;
        return this;
    }
}