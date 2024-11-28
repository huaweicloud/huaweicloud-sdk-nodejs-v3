import { CreateTag } from './CreateTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInternetBandwidthDomainTagsResponse extends SdkResponse {
    public tags?: Array<CreateTag>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<CreateTag>): ListInternetBandwidthDomainTagsResponse {
        this['tags'] = tags;
        return this;
    }
    public withXRequestId(xRequestId: string): ListInternetBandwidthDomainTagsResponse {
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