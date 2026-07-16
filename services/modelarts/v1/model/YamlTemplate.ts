

export class YamlTemplate {
    private 'algorithm_type_en'?: string;
    private 'algorithm_type_zh'?: string;
    private 'algorithm_names'?: Array<string>;
    public constructor() { 
    }
    public withAlgorithmTypeEn(algorithmTypeEn: string): YamlTemplate {
        this['algorithm_type_en'] = algorithmTypeEn;
        return this;
    }
    public set algorithmTypeEn(algorithmTypeEn: string  | undefined) {
        this['algorithm_type_en'] = algorithmTypeEn;
    }
    public get algorithmTypeEn(): string | undefined {
        return this['algorithm_type_en'];
    }
    public withAlgorithmTypeZh(algorithmTypeZh: string): YamlTemplate {
        this['algorithm_type_zh'] = algorithmTypeZh;
        return this;
    }
    public set algorithmTypeZh(algorithmTypeZh: string  | undefined) {
        this['algorithm_type_zh'] = algorithmTypeZh;
    }
    public get algorithmTypeZh(): string | undefined {
        return this['algorithm_type_zh'];
    }
    public withAlgorithmNames(algorithmNames: Array<string>): YamlTemplate {
        this['algorithm_names'] = algorithmNames;
        return this;
    }
    public set algorithmNames(algorithmNames: Array<string>  | undefined) {
        this['algorithm_names'] = algorithmNames;
    }
    public get algorithmNames(): Array<string> | undefined {
        return this['algorithm_names'];
    }
}