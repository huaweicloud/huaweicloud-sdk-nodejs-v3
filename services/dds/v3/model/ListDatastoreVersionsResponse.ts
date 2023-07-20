
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDatastoreVersionsResponse extends SdkResponse {
    public versions?: Array<string>;
    public constructor() { 
        super();
    }
    public withVersions(versions: Array<string>): ListDatastoreVersionsResponse {
        this['versions'] = versions;
        return this;
    }
}