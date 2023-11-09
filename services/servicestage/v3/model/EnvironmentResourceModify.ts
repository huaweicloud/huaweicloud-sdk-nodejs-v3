import { Resource } from './Resource';


export class EnvironmentResourceModify {
    public resources?: Array<Resource>;
    public constructor(resources?: Array<Resource>) { 
        this['resources'] = resources;
    }
    public withResources(resources: Array<Resource>): EnvironmentResourceModify {
        this['resources'] = resources;
        return this;
    }
}