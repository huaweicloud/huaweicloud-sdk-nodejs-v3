import { PageInfo } from './PageInfo';
import { Vpc } from './Vpc';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVpcsResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    public vpcs?: Array<Vpc>;
    private 'page_info'?: PageInfo | undefined;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListVpcsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withVpcs(vpcs: Array<Vpc>): ListVpcsResponse {
        this['vpcs'] = vpcs;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListVpcsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
}