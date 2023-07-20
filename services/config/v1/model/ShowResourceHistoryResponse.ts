import { HistoryItem } from './HistoryItem';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowResourceHistoryResponse extends SdkResponse {
    public items?: Array<HistoryItem>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withItems(items: Array<HistoryItem>): ShowResourceHistoryResponse {
        this['items'] = items;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ShowResourceHistoryResponse {
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