
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDatastoresResponse extends SdkResponse {
    public versions?: Array<string>;
    public constructor() { 
        super();
    }
    public withVersions(versions: Array<string>): ListDatastoresResponse {
        this['versions'] = versions;
        return this;
    }
}