import { ListAuditlogsResult } from './ListAuditlogsResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditlogsResponse extends SdkResponse {
    private 'total_record'?: number;
    private 'audit_logs'?: Array<ListAuditlogsResult>;
    public constructor() { 
        super();
    }
    public withTotalRecord(totalRecord: number): ListAuditlogsResponse {
        this['total_record'] = totalRecord;
        return this;
    }
    public set totalRecord(totalRecord: number  | undefined) {
        this['total_record'] = totalRecord;
    }
    public get totalRecord(): number | undefined {
        return this['total_record'];
    }
    public withAuditLogs(auditLogs: Array<ListAuditlogsResult>): ListAuditlogsResponse {
        this['audit_logs'] = auditLogs;
        return this;
    }
    public set auditLogs(auditLogs: Array<ListAuditlogsResult>  | undefined) {
        this['audit_logs'] = auditLogs;
    }
    public get auditLogs(): Array<ListAuditlogsResult> | undefined {
        return this['audit_logs'];
    }
}