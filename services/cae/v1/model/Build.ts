import { Archive } from './Archive';


export class Build {
    public archive?: Archive;
    public parameters?: { [key: string]: string; };
    public constructor(archive?: Archive, parameters?: { [key: string]: string; }) { 
        this['archive'] = archive;
        this['parameters'] = parameters;
    }
    public withArchive(archive: Archive): Build {
        this['archive'] = archive;
        return this;
    }
    public withParameters(parameters: { [key: string]: string; }): Build {
        this['parameters'] = parameters;
        return this;
    }
}