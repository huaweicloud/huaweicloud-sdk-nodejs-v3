import { ShowReposTagResp } from './ShowReposTagResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRepositoryTagsResponse extends SdkResponse {
    public body?: Array<ShowReposTagResp>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ShowReposTagResp>): ListRepositoryTagsResponse {
        this['body'] = body;
        return this;
    }
}