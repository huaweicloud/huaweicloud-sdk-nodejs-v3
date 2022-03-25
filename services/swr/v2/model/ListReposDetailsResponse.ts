import { ShowReposResp } from './ShowReposResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListReposDetailsResponse extends SdkResponse {
    public body?: Array<ShowReposResp>;
    private 'Content-Range'?: string | undefined;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ShowReposResp>): ListReposDetailsResponse {
        this['body'] = body;
        return this;
    }
    public withContentRange(contentRange: string): ListReposDetailsResponse {
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