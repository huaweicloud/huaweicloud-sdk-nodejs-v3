import { CdmClusterFlavor } from './CdmClusterFlavor';


export class CdmClusterDatastoreVersion {
    public id?: string;
    public name?: string;
    public flavors?: Array<CdmClusterFlavor>;
    public constructor() { 
    }
    public withId(id: string): CdmClusterDatastoreVersion {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CdmClusterDatastoreVersion {
        this['name'] = name;
        return this;
    }
    public withFlavors(flavors: Array<CdmClusterFlavor>): CdmClusterDatastoreVersion {
        this['flavors'] = flavors;
        return this;
    }
}