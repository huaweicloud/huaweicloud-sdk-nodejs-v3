import { CreateBuildJobParameterParam } from './CreateBuildJobParameterParam';


export class Parameter {
    public name?: string;
    public params?: Array<CreateBuildJobParameterParam>;
    public constructor() { 
    }
    public withName(name: string): Parameter {
        this['name'] = name;
        return this;
    }
    public withParams(params: Array<CreateBuildJobParameterParam>): Parameter {
        this['params'] = params;
        return this;
    }
}