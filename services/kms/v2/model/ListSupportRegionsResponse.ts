
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSupportRegionsResponse extends SdkResponse {
    public regions?: Array<string>;
    public constructor() { 
        super();
    }
    public withRegions(regions: Array<string>): ListSupportRegionsResponse {
        this['regions'] = regions;
        return this;
    }
}