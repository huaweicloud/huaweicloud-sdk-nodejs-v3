import { CdmClusterVersion } from './CdmClusterVersion';


export class CdmClusterDatastore {
    public id?: string;
    public name?: string;
    public bigclusterEnable?: boolean;
    public defaultVersion?: string;
    public versions?: Array<CdmClusterVersion>;
    public constructor(id?: string, name?: string, bigclusterEnable?: boolean, defaultVersion?: string, versions?: Array<CdmClusterVersion>) { 
        this['id'] = id;
        this['name'] = name;
        this['bigclusterEnable'] = bigclusterEnable;
        this['defaultVersion'] = defaultVersion;
        this['versions'] = versions;
    }
    public withId(id: string): CdmClusterDatastore {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CdmClusterDatastore {
        this['name'] = name;
        return this;
    }
    public withBigclusterEnable(bigclusterEnable: boolean): CdmClusterDatastore {
        this['bigclusterEnable'] = bigclusterEnable;
        return this;
    }
    public withDefaultVersion(defaultVersion: string): CdmClusterDatastore {
        this['defaultVersion'] = defaultVersion;
        return this;
    }
    public withVersions(versions: Array<CdmClusterVersion>): CdmClusterDatastore {
        this['versions'] = versions;
        return this;
    }
}