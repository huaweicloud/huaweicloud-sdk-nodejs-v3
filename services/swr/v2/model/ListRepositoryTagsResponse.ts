import { ShowReposTagResp } from './ShowReposTagResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRepositoryTagsResponse extends SdkResponse {
    public body?: Array<ShowReposTagResp>;
    private 'Content-Range'?: string | undefined;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ShowReposTagResp>): ListRepositoryTagsResponse {
        this['body'] = body;
        return this;
    }
    public withContentRange(contentRange: string): ListRepositoryTagsResponse {
        this['Content-Range'] = contentRange;
        return this;
    }
    public set contentRange(contentRange: string | undefined) {
        this['Content-Range'] = contentRange;
    }
    public get contentRange() {
        return this['Content-Range'];
    }
}