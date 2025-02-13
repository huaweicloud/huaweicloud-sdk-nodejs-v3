import { Archive } from './Archive';


export class ActionOnComponentBuild {
    public archive?: Archive;
    public parameters?: { [key: string]: string; };
    public constructor() { 
    }
    public withArchive(archive: Archive): ActionOnComponentBuild {
        this['archive'] = archive;
        return this;
    }
    public withParameters(parameters: { [key: string]: string; }): ActionOnComponentBuild {
        this['parameters'] = parameters;
        return this;
    }
}