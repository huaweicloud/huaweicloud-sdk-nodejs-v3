

export class SetAuditLogPolicyRequestBody {
    private 'keep_days'?: number;
    private 'reserve_audit_logs'?: boolean;
    private 'audit_types'?: Array<string>;
    public constructor(keepDays?: number) { 
        this['keep_days'] = keepDays;
    }
    public withKeepDays(keepDays: number): SetAuditLogPolicyRequestBody {
        this['keep_days'] = keepDays;
        return this;
    }
    public set keepDays(keepDays: number  | undefined) {
        this['keep_days'] = keepDays;
    }
    public get keepDays(): number | undefined {
        return this['keep_days'];
    }
    public withReserveAuditLogs(reserveAuditLogs: boolean): SetAuditLogPolicyRequestBody {
        this['reserve_audit_logs'] = reserveAuditLogs;
        return this;
    }
    public set reserveAuditLogs(reserveAuditLogs: boolean  | undefined) {
        this['reserve_audit_logs'] = reserveAuditLogs;
    }
    public get reserveAuditLogs(): boolean | undefined {
        return this['reserve_audit_logs'];
    }
    public withAuditTypes(auditTypes: Array<string>): SetAuditLogPolicyRequestBody {
        this['audit_types'] = auditTypes;
        return this;
    }
    public set auditTypes(auditTypes: Array<string>  | undefined) {
        this['audit_types'] = auditTypes;
    }
    public get auditTypes(): Array<string> | undefined {
        return this['audit_types'];
    }
}