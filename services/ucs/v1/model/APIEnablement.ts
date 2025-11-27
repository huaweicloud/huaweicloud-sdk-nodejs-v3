import { APIResource } from './APIResource';


export class APIEnablement {
    public groupVersion?: string;
    public resources?: Array<APIResource>;
    public constructor() { 
    }
    public withGroupVersion(groupVersion: string): APIEnablement {
        this['groupVersion'] = groupVersion;
        return this;
    }
    public withResources(resources: Array<APIResource>): APIEnablement {
        this['resources'] = resources;
        return this;
    }
}