import { ChangesTreeDto } from './ChangesTreeDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMergeRequestChangesTreesResponse extends SdkResponse {
    public body?: Array<ChangesTreeDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ChangesTreeDto>): ListMergeRequestChangesTreesResponse {
        this['body'] = body;
        return this;
    }
}