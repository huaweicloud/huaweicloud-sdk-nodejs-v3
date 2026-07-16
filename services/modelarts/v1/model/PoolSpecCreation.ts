import { PoolDriver } from './PoolDriver';
import { PoolResourceFlavor } from './PoolResourceFlavor';
import { PoolSpecCreationNetwork } from './PoolSpecCreationNetwork';


export class PoolSpecCreation {
    public type?: string;
    public scope?: Array<string>;
    public resources?: Array<PoolResourceFlavor>;
    public network?: PoolSpecCreationNetwork;
    public jobFlavors?: Array<string>;
    public driver?: PoolDriver;
    public constructor(type?: string, scope?: Array<string>, resources?: Array<PoolResourceFlavor>, network?: PoolSpecCreationNetwork) { 
        this['type'] = type;
        this['scope'] = scope;
        this['resources'] = resources;
        this['network'] = network;
    }
    public withType(type: string): PoolSpecCreation {
        this['type'] = type;
        return this;
    }
    public withScope(scope: Array<string>): PoolSpecCreation {
        this['scope'] = scope;
        return this;
    }
    public withResources(resources: Array<PoolResourceFlavor>): PoolSpecCreation {
        this['resources'] = resources;
        return this;
    }
    public withNetwork(network: PoolSpecCreationNetwork): PoolSpecCreation {
        this['network'] = network;
        return this;
    }
    public withJobFlavors(jobFlavors: Array<string>): PoolSpecCreation {
        this['jobFlavors'] = jobFlavors;
        return this;
    }
    public withDriver(driver: PoolDriver): PoolSpecCreation {
        this['driver'] = driver;
        return this;
    }
}