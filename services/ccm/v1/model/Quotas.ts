import { Resources } from './Resources';


export class Quotas {
    public resources?: Array<Resources>;
    public constructor(resources?: Array<Resources>) { 
        this['resources'] = resources;
    }
    public withResources(resources: Array<Resources>): Quotas {
        this['resources'] = resources;
        return this;
    }
}