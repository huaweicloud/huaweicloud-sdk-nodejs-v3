import { SecurityRuleCve } from './SecurityRuleCve';
import { SecurityRuleSeverity } from './SecurityRuleSeverity';


export class SecurityRule {
    public severity?: SecurityRuleSeverity;
    public cve?: SecurityRuleCve;
    public constructor() { 
    }
    public withSeverity(severity: SecurityRuleSeverity): SecurityRule {
        this['severity'] = severity;
        return this;
    }
    public withCve(cve: SecurityRuleCve): SecurityRule {
        this['cve'] = cve;
        return this;
    }
}