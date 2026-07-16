

export class AlgorithmResponseJobConfigOutputs {
    public name?: string;
    public description?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): AlgorithmResponseJobConfigOutputs {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AlgorithmResponseJobConfigOutputs {
        this['description'] = description;
        return this;
    }
}