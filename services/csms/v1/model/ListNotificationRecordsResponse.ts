import { PageInfo } from './PageInfo';
import { Record } from './Record';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNotificationRecordsResponse extends SdkResponse {
    public records?: Array<Record>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withRecords(records: Array<Record>): ListNotificationRecordsResponse {
        this['records'] = records;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListNotificationRecordsResponse {
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