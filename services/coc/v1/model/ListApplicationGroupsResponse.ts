import { GroupQueryResponseData } from './GroupQueryResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApplicationGroupsResponse extends SdkResponse {
    public data?: Array<GroupQueryResponseData>;
    public constructor() { 
        super();
    }
    public withData(data: Array<GroupQueryResponseData>): ListApplicationGroupsResponse {
        this['data'] = data;
        return this;
    }
}