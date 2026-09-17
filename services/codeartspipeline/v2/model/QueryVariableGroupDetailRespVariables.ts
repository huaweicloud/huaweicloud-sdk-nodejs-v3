

export class QueryVariableGroupDetailRespVariables {
    public name?: string;
    public sequence?: number;
    public type?: string;
    public value?: string;
    private 'is_secret'?: boolean;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): QueryVariableGroupDetailRespVariables {
        this['name'] = name;
        return this;
    }
    public withSequence(sequence: number): QueryVariableGroupDetailRespVariables {
        this['sequence'] = sequence;
        return this;
    }
    public withType(type: string): QueryVariableGroupDetailRespVariables {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): QueryVariableGroupDetailRespVariables {
        this['value'] = value;
        return this;
    }
    public withIsSecret(isSecret: boolean): QueryVariableGroupDetailRespVariables {
        this['is_secret'] = isSecret;
        return this;
    }
    public set isSecret(isSecret: boolean  | undefined) {
        this['is_secret'] = isSecret;
    }
    public get isSecret(): boolean | undefined {
        return this['is_secret'];
    }
    public withDescription(description: string): QueryVariableGroupDetailRespVariables {
        this['description'] = description;
        return this;
    }
}