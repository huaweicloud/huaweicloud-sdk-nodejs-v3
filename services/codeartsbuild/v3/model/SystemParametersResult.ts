

export class SystemParametersResult {
    public id?: number;
    private 'parameter_name'?: string;
    public description?: string;
    public constructor() { 
    }
    public withId(id: number): SystemParametersResult {
        this['id'] = id;
        return this;
    }
    public withParameterName(parameterName: string): SystemParametersResult {
        this['parameter_name'] = parameterName;
        return this;
    }
    public set parameterName(parameterName: string  | undefined) {
        this['parameter_name'] = parameterName;
    }
    public get parameterName(): string | undefined {
        return this['parameter_name'];
    }
    public withDescription(description: string): SystemParametersResult {
        this['description'] = description;
        return this;
    }
}