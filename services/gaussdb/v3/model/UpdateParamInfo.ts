

export class UpdateParamInfo {
    private 'node_type'?: string;
    private 'parameter_values'?: { [key: string]: string; };
    public constructor(nodeType?: string, parameterValues?: { [key: string]: string; }) { 
        this['node_type'] = nodeType;
        this['parameter_values'] = parameterValues;
    }
    public withNodeType(nodeType: string): UpdateParamInfo {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: string  | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType(): string | undefined {
        return this['node_type'];
    }
    public withParameterValues(parameterValues: { [key: string]: string; }): UpdateParamInfo {
        this['parameter_values'] = parameterValues;
        return this;
    }
    public set parameterValues(parameterValues: { [key: string]: string; }  | undefined) {
        this['parameter_values'] = parameterValues;
    }
    public get parameterValues(): { [key: string]: string; } | undefined {
        return this['parameter_values'];
    }
}