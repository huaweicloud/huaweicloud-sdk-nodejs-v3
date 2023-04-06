import { AuditDumpRecord } from './AuditDumpRecord';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditLogResponse extends SdkResponse {
    public records?: Array<AuditDumpRecord>;
    private 'cluster_id'?: string | undefined;
    public count?: number;
    public constructor() { 
        super();
    }
    public withRecords(records: Array<AuditDumpRecord>): ListAuditLogResponse {
        this['records'] = records;
        return this;
    }
    public withClusterId(clusterId: string): ListAuditLogResponse {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withCount(count: number): ListAuditLogResponse {
        this['count'] = count;
        return this;
    }
}