import { UserProcessAuditLog } from './UserProcessAuditLog';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProcessesAuditLogResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'process_audit_logs'?: Array<UserProcessAuditLog>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ShowProcessesAuditLogResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withProcessAuditLogs(processAuditLogs: Array<UserProcessAuditLog>): ShowProcessesAuditLogResponse {
        this['process_audit_logs'] = processAuditLogs;
        return this;
    }
    public set processAuditLogs(processAuditLogs: Array<UserProcessAuditLog>  | undefined) {
        this['process_audit_logs'] = processAuditLogs;
    }
    public get processAuditLogs(): Array<UserProcessAuditLog> | undefined {
        return this['process_audit_logs'];
    }
}