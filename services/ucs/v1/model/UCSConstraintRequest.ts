

export class UCSConstraintRequest {
    public constraintTemplateID?: string;
    public enforcementAction?: string;
    public namespaces?: Array<string>;
    public parameters?: object;
    public constructor() { 
    }
    public withConstraintTemplateID(constraintTemplateID: string): UCSConstraintRequest {
        this['constraintTemplateID'] = constraintTemplateID;
        return this;
    }
    public withEnforcementAction(enforcementAction: string): UCSConstraintRequest {
        this['enforcementAction'] = enforcementAction;
        return this;
    }
    public withNamespaces(namespaces: Array<string>): UCSConstraintRequest {
        this['namespaces'] = namespaces;
        return this;
    }
    public withParameters(parameters: object): UCSConstraintRequest {
        this['parameters'] = parameters;
        return this;
    }
}