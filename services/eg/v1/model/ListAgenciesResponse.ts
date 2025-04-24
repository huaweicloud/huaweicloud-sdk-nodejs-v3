
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAgenciesResponse extends SdkResponse {
    public agencies?: Array<string>;
    public constructor() { 
        super();
    }
    public withAgencies(agencies: Array<string>): ListAgenciesResponse {
        this['agencies'] = agencies;
        return this;
    }
}