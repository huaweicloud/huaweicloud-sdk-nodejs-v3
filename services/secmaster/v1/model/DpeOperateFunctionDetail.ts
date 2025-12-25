import { Params } from './Params';


export class DpeOperateFunctionDetail {
    public name?: string;
    public classify?: string;
    public description?: string;
    public example?: string;
    public operationfunc?: string;
    public params?: Array<Params>;
    public constructor() { 
    }
    public withName(name: string): DpeOperateFunctionDetail {
        this['name'] = name;
        return this;
    }
    public withClassify(classify: string): DpeOperateFunctionDetail {
        this['classify'] = classify;
        return this;
    }
    public withDescription(description: string): DpeOperateFunctionDetail {
        this['description'] = description;
        return this;
    }
    public withExample(example: string): DpeOperateFunctionDetail {
        this['example'] = example;
        return this;
    }
    public withOperationfunc(operationfunc: string): DpeOperateFunctionDetail {
        this['operationfunc'] = operationfunc;
        return this;
    }
    public withParams(params: Array<Params>): DpeOperateFunctionDetail {
        this['params'] = params;
        return this;
    }
}