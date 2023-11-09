import { BuildInfoParameters } from './BuildInfoParameters';


export class BuildInfo {
    public id?: string;
    public parameters?: BuildInfoParameters;
    public constructor() { 
    }
    public withId(id: string): BuildInfo {
        this['id'] = id;
        return this;
    }
    public withParameters(parameters: BuildInfoParameters): BuildInfo {
        this['parameters'] = parameters;
        return this;
    }
}