import { Constraint } from './Constraint';


export class UCSConstraintSpec {
    public constraint?: Constraint;
    public constraintTemplateID?: string;
    public domainID?: string;
    public targetScope?: string;
    public targetID?: string;
    public constructor() { 
    }
    public withConstraint(constraint: Constraint): UCSConstraintSpec {
        this['constraint'] = constraint;
        return this;
    }
    public withConstraintTemplateID(constraintTemplateID: string): UCSConstraintSpec {
        this['constraintTemplateID'] = constraintTemplateID;
        return this;
    }
    public withDomainID(domainID: string): UCSConstraintSpec {
        this['domainID'] = domainID;
        return this;
    }
    public withTargetScope(targetScope: string): UCSConstraintSpec {
        this['targetScope'] = targetScope;
        return this;
    }
    public withTargetID(targetID: string): UCSConstraintSpec {
        this['targetID'] = targetID;
        return this;
    }
}