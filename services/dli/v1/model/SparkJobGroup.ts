import { SparkJobResource } from './SparkJobResource';


export class SparkJobGroup {
    public name?: string;
    public resources?: Array<SparkJobResource>;
    public constructor() { 
    }
    public withName(name: string): SparkJobGroup {
        this['name'] = name;
        return this;
    }
    public withResources(resources: Array<SparkJobResource>): SparkJobGroup {
        this['resources'] = resources;
        return this;
    }
}