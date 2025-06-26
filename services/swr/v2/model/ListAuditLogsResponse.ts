import { AuditLog } from './AuditLog';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditLogsResponse extends SdkResponse {
    private 'audit_logs'?: Array<AuditLog>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withAuditLogs(auditLogs: Array<AuditLog>): ListAuditLogsResponse {
        this['audit_logs'] = auditLogs;
        return this;
    }
    public set auditLogs(auditLogs: Array<AuditLog>  | undefined) {
        this['audit_logs'] = auditLogs;
    }
    public get auditLogs(): Array<AuditLog> | undefined {
        return this['audit_logs'];
    }
    public withTotal(total: number): ListAuditLogsResponse {
        this['total'] = total;
        return this;
    }
}