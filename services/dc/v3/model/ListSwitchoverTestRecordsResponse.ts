import { PageInfo } from './PageInfo';
import { SwitchoverTestRecord } from './SwitchoverTestRecord';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSwitchoverTestRecordsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'switchover_test_records'?: Array<SwitchoverTestRecord>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListSwitchoverTestRecordsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withSwitchoverTestRecords(switchoverTestRecords: Array<SwitchoverTestRecord>): ListSwitchoverTestRecordsResponse {
        this['switchover_test_records'] = switchoverTestRecords;
        return this;
    }
    public set switchoverTestRecords(switchoverTestRecords: Array<SwitchoverTestRecord>  | undefined) {
        this['switchover_test_records'] = switchoverTestRecords;
    }
    public get switchoverTestRecords(): Array<SwitchoverTestRecord> | undefined {
        return this['switchover_test_records'];
    }
    public withPageInfo(pageInfo: PageInfo): ListSwitchoverTestRecordsResponse {
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