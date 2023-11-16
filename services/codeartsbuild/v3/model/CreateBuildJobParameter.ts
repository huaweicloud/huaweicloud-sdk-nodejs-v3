import { CreateBuildJobParameterParam } from './CreateBuildJobParameterParam';


export class CreateBuildJobParameter {
    public name?: string;
    public params?: Array<CreateBuildJobParameterParam>;
    public constructor() { 
    }
    public withName(name: string): CreateBuildJobParameter {
        this['name'] = name;
        return this;
    }
    public withParams(params: Array<CreateBuildJobParameterParam>): CreateBuildJobParameter {
        this['params'] = params;
        return this;
    }
}