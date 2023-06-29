
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateClusterNameResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): UpdateClusterNameResponse {
        this['result'] = result;
        return this;
    }
}