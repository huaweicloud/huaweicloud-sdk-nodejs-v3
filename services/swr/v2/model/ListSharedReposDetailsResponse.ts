import { ShowReposResp } from './ShowReposResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSharedReposDetailsResponse extends SdkResponse {
    public body?: Array<ShowReposResp>;
    private 'Content-Range'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ShowReposResp>): ListSharedReposDetailsResponse {
        this['body'] = body;
        return this;
    }
    public withContentRange(contentRange: string): ListSharedReposDetailsResponse {
        this['Content-Range'] = contentRange;
        return this;
    }
    public set contentRange(contentRange: string  | undefined) {
        this['Content-Range'] = contentRange;
    }
    public get contentRange(): string | undefined {
        return this['Content-Range'];
    }
}