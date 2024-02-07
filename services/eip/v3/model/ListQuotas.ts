import { ResourcesInfo } from './ResourcesInfo';


export class ListQuotas {
    public resources?: Array<ResourcesInfo>;
    public constructor(resources?: Array<ResourcesInfo>) { 
        this['resources'] = resources;
    }
    public withResources(resources: Array<ResourcesInfo>): ListQuotas {
        this['resources'] = resources;
        return this;
    }
}