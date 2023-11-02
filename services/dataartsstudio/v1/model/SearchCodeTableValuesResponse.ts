
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchCodeTableValuesResponse extends SdkResponse {
    public data?: object;
    public constructor() { 
        super();
    }
    public withData(data: object): SearchCodeTableValuesResponse {
        this['data'] = data;
        return this;
    }
}