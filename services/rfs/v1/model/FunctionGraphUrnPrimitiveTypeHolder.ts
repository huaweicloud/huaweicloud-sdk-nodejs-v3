

export class FunctionGraphUrnPrimitiveTypeHolder {
    private 'function_graph_urn'?: string;
    public constructor() { 
    }
    public withFunctionGraphUrn(functionGraphUrn: string): FunctionGraphUrnPrimitiveTypeHolder {
        this['function_graph_urn'] = functionGraphUrn;
        return this;
    }
    public set functionGraphUrn(functionGraphUrn: string  | undefined) {
        this['function_graph_urn'] = functionGraphUrn;
    }
    public get functionGraphUrn(): string | undefined {
        return this['function_graph_urn'];
    }
}