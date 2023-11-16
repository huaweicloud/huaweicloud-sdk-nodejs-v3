import { UpdateBuildJobParameterParam } from './UpdateBuildJobParameterParam';


export class UpdateBuildJobParameter {
    public name?: string;
    public params?: Array<UpdateBuildJobParameterParam>;
    public constructor() { 
    }
    public withName(name: string): UpdateBuildJobParameter {
        this['name'] = name;
        return this;
    }
    public withParams(params: Array<UpdateBuildJobParameterParam>): UpdateBuildJobParameter {
        this['params'] = params;
        return this;
    }
}