import { AuditLogInfo } from './AuditLogInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPlaybookAuditLogsResponse extends SdkResponse {
    public count?: number;
    private 'audit_logs'?: Array<AuditLogInfo>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListPlaybookAuditLogsResponse {
        this['count'] = count;
        return this;
    }
    public withAuditLogs(auditLogs: Array<AuditLogInfo>): ListPlaybookAuditLogsResponse {
        this['audit_logs'] = auditLogs;
        return this;
    }
    public set auditLogs(auditLogs: Array<AuditLogInfo>  | undefined) {
        this['audit_logs'] = auditLogs;
    }
    public get auditLogs(): Array<AuditLogInfo> | undefined {
        return this['audit_logs'];
    }
    public withXRequestId(xRequestId: string): ListPlaybookAuditLogsResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}