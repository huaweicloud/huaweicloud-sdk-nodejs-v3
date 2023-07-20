

export class SetAuditlogPolicyRequestBody {
    private 'keep_days'?: number;
    private 'reserve_auditlogs'?: string;
    private 'audit_scope'?: string;
    private 'audit_types'?: Array<string>;
    public constructor(keepDays?: number) { 
        this['keep_days'] = keepDays;
    }
    public withKeepDays(keepDays: number): SetAuditlogPolicyRequestBody {
        this['keep_days'] = keepDays;
        return this;
    }
    public set keepDays(keepDays: number  | undefined) {
        this['keep_days'] = keepDays;
    }
    public get keepDays(): number | undefined {
        return this['keep_days'];
    }
    public withReserveAuditlogs(reserveAuditlogs: string): SetAuditlogPolicyRequestBody {
        this['reserve_auditlogs'] = reserveAuditlogs;
        return this;
    }
    public set reserveAuditlogs(reserveAuditlogs: string  | undefined) {
        this['reserve_auditlogs'] = reserveAuditlogs;
    }
    public get reserveAuditlogs(): string | undefined {
        return this['reserve_auditlogs'];
    }
    public withAuditScope(auditScope: string): SetAuditlogPolicyRequestBody {
        this['audit_scope'] = auditScope;
        return this;
    }
    public set auditScope(auditScope: string  | undefined) {
        this['audit_scope'] = auditScope;
    }
    public get auditScope(): string | undefined {
        return this['audit_scope'];
    }
    public withAuditTypes(auditTypes: Array<string>): SetAuditlogPolicyRequestBody {
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