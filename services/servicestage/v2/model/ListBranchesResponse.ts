
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBranchesResponse extends SdkResponse {
    public branches?: Array<string>;
    public constructor() { 
        super();
    }
    public withBranches(branches: Array<string>): ListBranchesResponse {
        this['branches'] = branches;
        return this;
    }
}