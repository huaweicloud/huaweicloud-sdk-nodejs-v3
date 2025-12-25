import { AuditDO } from './AuditDO';


export class AuditResult {
    public auditInfoList?: Array<AuditDO>;
    public total?: number;
    public constructor() { 
    }
    public withAuditInfoList(auditInfoList: Array<AuditDO>): AuditResult {
        this['auditInfoList'] = auditInfoList;
        return this;
    }
    public withTotal(total: number): AuditResult {
        this['total'] = total;
        return this;
    }
}