

export class ShowAutoSearchYamlTemplateContentRequest {
    private 'algorithm_type'?: string;
    private 'algorithm_name'?: string;
    public constructor(algorithmType?: string, algorithmName?: string) { 
        this['algorithm_type'] = algorithmType;
        this['algorithm_name'] = algorithmName;
    }
    public withAlgorithmType(algorithmType: string): ShowAutoSearchYamlTemplateContentRequest {
        this['algorithm_type'] = algorithmType;
        return this;
    }
    public set algorithmType(algorithmType: string  | undefined) {
        this['algorithm_type'] = algorithmType;
    }
    public get algorithmType(): string | undefined {
        return this['algorithm_type'];
    }
    public withAlgorithmName(algorithmName: string): ShowAutoSearchYamlTemplateContentRequest {
        this['algorithm_name'] = algorithmName;
        return this;
    }
    public set algorithmName(algorithmName: string  | undefined) {
        this['algorithm_name'] = algorithmName;
    }
    public get algorithmName(): string | undefined {
        return this['algorithm_name'];
    }
}