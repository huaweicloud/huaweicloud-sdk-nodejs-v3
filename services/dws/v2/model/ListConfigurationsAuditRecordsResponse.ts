import { ConfigurationRecordResp } from './ConfigurationRecordResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListConfigurationsAuditRecordsResponse extends SdkResponse {
    public records?: Array<ConfigurationRecordResp>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withRecords(records: Array<ConfigurationRecordResp>): ListConfigurationsAuditRecordsResponse {
        this['records'] = records;
        return this;
    }
    public withCount(count: number): ListConfigurationsAuditRecordsResponse {
        this['count'] = count;
        return this;
    }
}