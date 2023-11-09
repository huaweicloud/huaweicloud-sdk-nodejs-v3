
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTreesResponse extends SdkResponse {
    public paths?: Array<string>;
    public constructor() { 
        super();
    }
    public withPaths(paths: Array<string>): ListTreesResponse {
        this['paths'] = paths;
        return this;
    }
}