import { AuditLogDetail } from './AuditLogDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditLogsResponse extends SdkResponse {
    private 'audit_logs'?: Array<AuditLogDetail>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withAuditLogs(auditLogs: Array<AuditLogDetail>): ListAuditLogsResponse {
        this['audit_logs'] = auditLogs;
        return this;
    }
    public set auditLogs(auditLogs: Array<AuditLogDetail>  | undefined) {
        this['audit_logs'] = auditLogs;
    }
    public get auditLogs(): Array<AuditLogDetail> | undefined {
        return this['audit_logs'];
    }
    public withTotalCount(totalCount: number): ListAuditLogsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}