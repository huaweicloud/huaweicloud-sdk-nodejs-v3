
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRegisteredClusterVersionsResponse extends SdkResponse {
    public versions?: Array<string>;
    public constructor() { 
        super();
    }
    public withVersions(versions: Array<string>): ListRegisteredClusterVersionsResponse {
        this['versions'] = versions;
        return this;
    }
}