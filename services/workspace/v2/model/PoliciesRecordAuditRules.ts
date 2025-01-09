import { RecordAuditRule } from './RecordAuditRule';


export class PoliciesRecordAuditRules {
    public rule?: RecordAuditRule;
    public constructor() { 
    }
    public withRule(rule: RecordAuditRule): PoliciesRecordAuditRules {
        this['rule'] = rule;
        return this;
    }
}