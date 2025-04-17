import { PageInfo } from './PageInfo';
import { Region } from './Region';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRegionsResponse extends SdkResponse {
    public value?: Array<Region>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withValue(value: Array<Region>): ListRegionsResponse {
        this['value'] = value;
        return this;
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
}