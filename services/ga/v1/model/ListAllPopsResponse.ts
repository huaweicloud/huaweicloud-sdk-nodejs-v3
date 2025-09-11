import { PageInfo } from './PageInfo';
import { PopOuterDetail } from './PopOuterDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAllPopsResponse extends SdkResponse {
    public pops?: Array<PopOuterDetail>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withPops(pops: Array<PopOuterDetail>): ListAllPopsResponse {
        this['pops'] = pops;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListAllPopsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}