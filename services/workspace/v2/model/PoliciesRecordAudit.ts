import { PoliciesRecordAuditRules } from './PoliciesRecordAuditRules';


export class PoliciesRecordAudit {
    public enable?: boolean;
    public rules?: PoliciesRecordAuditRules;
    public constructor() { 
    }
    public withEnable(enable: boolean): PoliciesRecordAudit {
        this['enable'] = enable;
        return this;
    }
    public withRules(rules: PoliciesRecordAuditRules): PoliciesRecordAudit {
        this['rules'] = rules;
        return this;
    }
}