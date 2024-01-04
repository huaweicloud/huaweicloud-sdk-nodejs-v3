import { AuditResultSystemAuditResultErrors } from './AuditResultSystemAuditResultErrors';


export class AuditResultSystemAuditResult {
    private 'audit_time'?: number;
    public errors?: Array<AuditResultSystemAuditResultErrors>;
    public constructor() { 
    }
    public withAuditTime(auditTime: number): AuditResultSystemAuditResult {
        this['audit_time'] = auditTime;
        return this;
    }
    public set auditTime(auditTime: number  | undefined) {
        this['audit_time'] = auditTime;
    }
    public get auditTime(): number | undefined {
        return this['audit_time'];
    }
    public withErrors(errors: Array<AuditResultSystemAuditResultErrors>): AuditResultSystemAuditResult {
        this['errors'] = errors;
        return this;
    }
}