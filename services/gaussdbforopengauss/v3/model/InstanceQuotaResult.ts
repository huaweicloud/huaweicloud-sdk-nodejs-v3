import { InstanceResourceQuotaResult } from './InstanceResourceQuotaResult';


export class InstanceQuotaResult {
    public resources?: Array<InstanceResourceQuotaResult>;
    public constructor() { 
    }
    public withResources(resources: Array<InstanceResourceQuotaResult>): InstanceQuotaResult {
        this['resources'] = resources;
        return this;
    }
}