

export class CreateVariableGroupReqVariables {
    public sequence?: number;
    public name?: string;
    public type?: string;
    public value?: string;
    public description?: string;
    private 'is_secret'?: boolean;
    public constructor() { 
    }
    public withSequence(sequence: number): CreateVariableGroupReqVariables {
        this['sequence'] = sequence;
        return this;
    }
    public withName(name: string): CreateVariableGroupReqVariables {
        this['name'] = name;
        return this;
    }
    public withType(type: string): CreateVariableGroupReqVariables {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): CreateVariableGroupReqVariables {
        this['value'] = value;
        return this;
    }
    public withDescription(description: string): CreateVariableGroupReqVariables {
        this['description'] = description;
        return this;
    }
    public withIsSecret(isSecret: boolean): CreateVariableGroupReqVariables {
        this['is_secret'] = isSecret;
        return this;
    }
    public set isSecret(isSecret: boolean  | undefined) {
        this['is_secret'] = isSecret;
    }
    public get isSecret(): boolean | undefined {
        return this['is_secret'];
    }
}