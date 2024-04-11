
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchFieldsForRelationResponse extends SdkResponse {
    public data?: object;
    public constructor() { 
        super();
    }
    public withData(data: object): SearchFieldsForRelationResponse {
        this['data'] = data;
        return this;
    }
}