import { PageInfoTagValues } from './PageInfoTagValues';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTagValuesResponse extends SdkResponse {
    public values?: Array<string>;
    private 'page_info'?: PageInfoTagValues | undefined;
    public constructor() { 
        super();
    }
    public withValues(values: Array<string>): ListTagValuesResponse {
        this['values'] = values;
        return this;
    }
    public withPageInfo(pageInfo: PageInfoTagValues): ListTagValuesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoTagValues | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
}