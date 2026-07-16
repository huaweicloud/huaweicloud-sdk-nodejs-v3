
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchUpdatePoolNodesResponse extends SdkResponse {
    public successNodeNames?: Array<string>;
    public failNodeNames?: Array<string>;
    public constructor() { 
        super();
    }
    public withSuccessNodeNames(successNodeNames: Array<string>): BatchUpdatePoolNodesResponse {
        this['successNodeNames'] = successNodeNames;
        return this;
    }
    public withFailNodeNames(failNodeNames: Array<string>): BatchUpdatePoolNodesResponse {
        this['failNodeNames'] = failNodeNames;
        return this;
    }
}