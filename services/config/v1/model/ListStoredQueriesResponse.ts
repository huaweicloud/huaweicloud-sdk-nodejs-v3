import { PageInfo } from './PageInfo';
import { StoredQuery } from './StoredQuery';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStoredQueriesResponse extends SdkResponse {
    public value?: Array<StoredQuery>;
    private 'page_info'?: PageInfo | undefined;
    public constructor() { 
        super();
    }
    public withValue(value: Array<StoredQuery>): ListStoredQueriesResponse {
        this['value'] = value;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListStoredQueriesResponse {
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