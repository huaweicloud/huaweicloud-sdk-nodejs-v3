import { TmsTag } from './TmsTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class QueryHyperinstanceTagsResponse extends SdkResponse {
    public tags?: Array<TmsTag>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TmsTag>): QueryHyperinstanceTagsResponse {
        this['tags'] = tags;
        return this;
    }
    public withXRequestId(xRequestId: string): QueryHyperinstanceTagsResponse {
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