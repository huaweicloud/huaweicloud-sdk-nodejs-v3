import { ListResponseBody } from './ListResponseBody';
import { PageInfo } from './PageInfo';
import { Region } from './Region';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRegionsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    public regions?: Array<Region>;
    public constructor(requestId?: string, regions?: Array<Region>) { 
        super();
        this['request_id'] = requestId;
        this['regions'] = regions;
    }
    public withRequestId(requestId: string): ListRegionsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListRegionsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withRegions(regions: Array<Region>): ListRegionsResponse {
        this['regions'] = regions;
        return this;
    }
}