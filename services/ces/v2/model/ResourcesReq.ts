import { Resource } from './Resource';


export class ResourcesReq {
    public resources?: Array<Resource>;
    public constructor(resources?: Array<Resource>) { 
        this['resources'] = resources;
    }
    public withResources(resources: Array<Resource>): ResourcesReq {
        this['resources'] = resources;
        return this;
    }
}