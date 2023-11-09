import { BuildParameters } from './BuildParameters';


export class Build {
    public parameters?: BuildParameters;
    public constructor() { 
    }
    public withParameters(parameters: BuildParameters): Build {
        this['parameters'] = parameters;
        return this;
    }
}