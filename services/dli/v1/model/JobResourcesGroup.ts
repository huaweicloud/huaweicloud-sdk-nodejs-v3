import { JobResource } from './JobResource';


export class JobResourcesGroup {
    public name?: string;
    public resources?: Array<JobResource>;
    public constructor() { 
    }
    public withName(name: string): JobResourcesGroup {
        this['name'] = name;
        return this;
    }
    public withResources(resources: Array<JobResource>): JobResourcesGroup {
        this['resources'] = resources;
        return this;
    }
}