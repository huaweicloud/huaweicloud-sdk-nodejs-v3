import { L7Policy } from './L7Policy';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListL7PoliciesResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    private 'page_info'?: PageInfo | undefined;
    public l7policies?: Array<L7Policy>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListL7PoliciesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListL7PoliciesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
    public withL7policies(l7policies: Array<L7Policy>): ListL7PoliciesResponse {
        this['l7policies'] = l7policies;
        return this;
    }
}