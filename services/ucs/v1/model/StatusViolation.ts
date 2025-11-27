

export class StatusViolation {
    public kind?: string;
    public name?: string;
    public namespace?: string;
    public message?: string;
    public enforcementAction?: string;
    public constructor() { 
    }
    public withKind(kind: string): StatusViolation {
        this['kind'] = kind;
        return this;
    }
    public withName(name: string): StatusViolation {
        this['name'] = name;
        return this;
    }
    public withNamespace(namespace: string): StatusViolation {
        this['namespace'] = namespace;
        return this;
    }
    public withMessage(message: string): StatusViolation {
        this['message'] = message;
        return this;
    }
    public withEnforcementAction(enforcementAction: string): StatusViolation {
        this['enforcementAction'] = enforcementAction;
        return this;
    }
}