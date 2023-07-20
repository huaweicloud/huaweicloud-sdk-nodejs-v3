

export class SetAuditlogPolicyRequestBody {
    private 'keep_days'?: number;
    private 'reserve_auditlogs'?: boolean;
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
    public withReserveAuditlogs(reserveAuditlogs: boolean): SetAuditlogPolicyRequestBody {
        this['reserve_auditlogs'] = reserveAuditlogs;
        return this;
    }
    public set reserveAuditlogs(reserveAuditlogs: boolean  | undefined) {
        this['reserve_auditlogs'] = reserveAuditlogs;
    }
    public get reserveAuditlogs(): boolean | undefined {
        return this['reserve_auditlogs'];
    }
}