
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListParseDomainDetailsResponse extends SdkResponse {
    public data?: Array<string>;
    public constructor() { 
        super();
    }
    public withData(data: Array<string>): ListParseDomainDetailsResponse {
        this['data'] = data;
        return this;
    }
}