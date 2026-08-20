

export class ProcessInstanceResponseResultIssuePriority {
    public id?: string;
    private 'display_value'?: string;
    public value?: string;
    public code?: string;
    private 'value_py'?: string;
    public sequence?: number;
    public level?: number;
    private 'domain_id'?: string;
    private 'belong_definition_type'?: string;
    public constructor() { 
    }
    public withId(id: string): ProcessInstanceResponseResultIssuePriority {
        this['id'] = id;
        return this;
    }
    public withDisplayValue(displayValue: string): ProcessInstanceResponseResultIssuePriority {
        this['display_value'] = displayValue;
        return this;
    }
    public set displayValue(displayValue: string  | undefined) {
        this['display_value'] = displayValue;
    }
    public get displayValue(): string | undefined {
        return this['display_value'];
    }
    public withValue(value: string): ProcessInstanceResponseResultIssuePriority {
        this['value'] = value;
        return this;
    }
    public withCode(code: string): ProcessInstanceResponseResultIssuePriority {
        this['code'] = code;
        return this;
    }
    public withValuePy(valuePy: string): ProcessInstanceResponseResultIssuePriority {
        this['value_py'] = valuePy;
        return this;
    }
    public set valuePy(valuePy: string  | undefined) {
        this['value_py'] = valuePy;
    }
    public get valuePy(): string | undefined {
        return this['value_py'];
    }
    public withSequence(sequence: number): ProcessInstanceResponseResultIssuePriority {
        this['sequence'] = sequence;
        return this;
    }
    public withLevel(level: number): ProcessInstanceResponseResultIssuePriority {
        this['level'] = level;
        return this;
    }
    public withDomainId(domainId: string): ProcessInstanceResponseResultIssuePriority {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withBelongDefinitionType(belongDefinitionType: string): ProcessInstanceResponseResultIssuePriority {
        this['belong_definition_type'] = belongDefinitionType;
        return this;
    }
    public set belongDefinitionType(belongDefinitionType: string  | undefined) {
        this['belong_definition_type'] = belongDefinitionType;
    }
    public get belongDefinitionType(): string | undefined {
        return this['belong_definition_type'];
    }
}