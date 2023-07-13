import { Resources } from './Resources';


export class QuotaResult {
    public resources?: Array<Resources>;
    public constructor() { 
    }
    public withResources(resources: Array<Resources>): QuotaResult {
        this['resources'] = resources;
        return this;
    }
}