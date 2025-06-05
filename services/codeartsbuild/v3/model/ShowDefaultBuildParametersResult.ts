import { ShowDefaultBuildParametersParams } from './ShowDefaultBuildParametersParams';


export class ShowDefaultBuildParametersResult {
    public name?: string;
    public params?: Array<ShowDefaultBuildParametersParams>;
    public constructor() { 
    }
    public withName(name: string): ShowDefaultBuildParametersResult {
        this['name'] = name;
        return this;
    }
    public withParams(params: Array<ShowDefaultBuildParametersParams>): ShowDefaultBuildParametersResult {
        this['params'] = params;
        return this;
    }
}