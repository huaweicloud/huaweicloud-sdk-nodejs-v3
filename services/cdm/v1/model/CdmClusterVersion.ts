import { ClusterLinks } from './ClusterLinks';


export class CdmClusterVersion {
    public active?: string;
    public id?: string;
    public image?: string;
    public name?: string;
    public packages?: string;
    public datastore?: string;
    public links?: Array<ClusterLinks>;
    public constructor() { 
    }
    public withActive(active: string): CdmClusterVersion {
        this['active'] = active;
        return this;
    }
    public withId(id: string): CdmClusterVersion {
        this['id'] = id;
        return this;
    }
    public withImage(image: string): CdmClusterVersion {
        this['image'] = image;
        return this;
    }
    public withName(name: string): CdmClusterVersion {
        this['name'] = name;
        return this;
    }
    public withPackages(packages: string): CdmClusterVersion {
        this['packages'] = packages;
        return this;
    }
    public withDatastore(datastore: string): CdmClusterVersion {
        this['datastore'] = datastore;
        return this;
    }
    public withLinks(links: Array<ClusterLinks>): CdmClusterVersion {
        this['links'] = links;
        return this;
    }
}