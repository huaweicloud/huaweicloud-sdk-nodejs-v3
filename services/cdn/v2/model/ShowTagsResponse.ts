import { TagMap } from './TagMap';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTagsResponse extends SdkResponse {
    public tags?: Array<TagMap>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TagMap>): ShowTagsResponse {
        this['tags'] = tags;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowTagsResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}