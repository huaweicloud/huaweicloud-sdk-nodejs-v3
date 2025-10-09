

export class ActionAssociatedResource {
    private 'urn_template'?: string;
    public required?: boolean;
    private 'condition_keys'?: Array<string>;
    public constructor(urnTemplate?: string, required?: boolean) { 
        this['urn_template'] = urnTemplate;
        this['required'] = required;
    }
    public withUrnTemplate(urnTemplate: string): ActionAssociatedResource {
        this['urn_template'] = urnTemplate;
        return this;
    }
    public set urnTemplate(urnTemplate: string  | undefined) {
        this['urn_template'] = urnTemplate;
    }
    public get urnTemplate(): string | undefined {
        return this['urn_template'];
    }
    public withRequired(required: boolean): ActionAssociatedResource {
        this['required'] = required;
        return this;
    }
    public withConditionKeys(conditionKeys: Array<string>): ActionAssociatedResource {
        this['condition_keys'] = conditionKeys;
        return this;
    }
    public set conditionKeys(conditionKeys: Array<string>  | undefined) {
        this['condition_keys'] = conditionKeys;
    }
    public get conditionKeys(): Array<string> | undefined {
        return this['condition_keys'];
    }
}