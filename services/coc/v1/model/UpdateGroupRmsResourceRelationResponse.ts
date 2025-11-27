
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateGroupRmsResourceRelationResponse extends SdkResponse {
    public data?: string;
    public constructor() { 
        super();
    }
    public withData(data: string): UpdateGroupRmsResourceRelationResponse {
        this['data'] = data;
        return this;
    }
}