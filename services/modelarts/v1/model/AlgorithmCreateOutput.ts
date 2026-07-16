

export class AlgorithmCreateOutput {
    public name?: string;
    public description?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): AlgorithmCreateOutput {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AlgorithmCreateOutput {
        this['description'] = description;
        return this;
    }
}