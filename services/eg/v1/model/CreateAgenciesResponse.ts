
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAgenciesResponse extends SdkResponse {
    public agencies?: Array<string>;
    public constructor() { 
        super();
    }
    public withAgencies(agencies: Array<string>): CreateAgenciesResponse {
        this['agencies'] = agencies;
        return this;
    }
}