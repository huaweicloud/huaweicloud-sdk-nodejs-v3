import { PoolDriver } from './PoolDriver';
import { PoolSpecUpdateResources } from './PoolSpecUpdateResources';


export class PoolSpecUpdate {
    public scope?: Array<string>;
    public resources?: Array<PoolSpecUpdateResources>;
    public jobFlavors?: Array<string>;
    public driver?: PoolDriver;
    public constructor() { 
    }
    public withScope(scope: Array<string>): PoolSpecUpdate {
        this['scope'] = scope;
        return this;
    }
    public withResources(resources: Array<PoolSpecUpdateResources>): PoolSpecUpdate {
        this['resources'] = resources;
        return this;
    }
    public withJobFlavors(jobFlavors: Array<string>): PoolSpecUpdate {
        this['jobFlavors'] = jobFlavors;
        return this;
    }
    public withDriver(driver: PoolDriver): PoolSpecUpdate {
        this['driver'] = driver;
        return this;
    }
}