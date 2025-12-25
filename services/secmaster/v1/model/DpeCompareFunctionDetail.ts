

export class DpeCompareFunctionDetail {
    public name?: string;
    public classify?: string;
    public description?: string;
    public example?: string;
    public comparefunc?: string;
    public constructor() { 
    }
    public withName(name: string): DpeCompareFunctionDetail {
        this['name'] = name;
        return this;
    }
    public withClassify(classify: string): DpeCompareFunctionDetail {
        this['classify'] = classify;
        return this;
    }
    public withDescription(description: string): DpeCompareFunctionDetail {
        this['description'] = description;
        return this;
    }
    public withExample(example: string): DpeCompareFunctionDetail {
        this['example'] = example;
        return this;
    }
    public withComparefunc(comparefunc: string): DpeCompareFunctionDetail {
        this['comparefunc'] = comparefunc;
        return this;
    }
}