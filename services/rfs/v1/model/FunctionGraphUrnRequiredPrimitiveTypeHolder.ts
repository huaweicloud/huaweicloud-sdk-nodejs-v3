

export class FunctionGraphUrnRequiredPrimitiveTypeHolder {
    private 'function_graph_urn'?: string;
    public constructor(functionGraphUrn?: string) { 
        this['function_graph_urn'] = functionGraphUrn;
    }
    public withFunctionGraphUrn(functionGraphUrn: string): FunctionGraphUrnRequiredPrimitiveTypeHolder {
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