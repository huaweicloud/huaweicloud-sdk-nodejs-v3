import { Resources } from './Resources';


export class Quotas {
    public resources?: Array<Resources>;
    public constructor() { 
    }
    public withResources(resources: Array<Resources>): Quotas {
        this['resources'] = resources;
        return this;
    }
}