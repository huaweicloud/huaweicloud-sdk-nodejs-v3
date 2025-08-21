import { TreeDto } from './TreeDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFileUpperTreeEntriesResponse extends SdkResponse {
    public body?: Array<TreeDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<TreeDto>): ListFileUpperTreeEntriesResponse {
        this['body'] = body;
        return this;
    }
}