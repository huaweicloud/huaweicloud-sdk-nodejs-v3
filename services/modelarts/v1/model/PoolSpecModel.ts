import { PoolDriver } from './PoolDriver';
import { PoolSpecModelContainernetwork } from './PoolSpecModelContainernetwork';
import { PoolSpecModelNetwork } from './PoolSpecModelNetwork';
import { PoolSpecModelResources } from './PoolSpecModelResources';


export class PoolSpecModel {
    public type?: string;
    public scope?: Array<string>;
    public resources?: Array<PoolSpecModelResources>;
    public containernetwork?: PoolSpecModelContainernetwork;
    public network?: PoolSpecModelNetwork;
    public jobFlavors?: Array<string>;
    public driver?: PoolDriver;
    public controlMode?: number;
    public constructor(type?: string, scope?: Array<string>, resources?: Array<PoolSpecModelResources>) { 
        this['type'] = type;
        this['scope'] = scope;
        this['resources'] = resources;
    }
    public withType(type: string): PoolSpecModel {
        this['type'] = type;
        return this;
    }
    public withScope(scope: Array<string>): PoolSpecModel {
        this['scope'] = scope;
        return this;
    }
    public withResources(resources: Array<PoolSpecModelResources>): PoolSpecModel {
        this['resources'] = resources;
        return this;
    }
    public withContainernetwork(containernetwork: PoolSpecModelContainernetwork): PoolSpecModel {
        this['containernetwork'] = containernetwork;
        return this;
    }
    public withNetwork(network: PoolSpecModelNetwork): PoolSpecModel {
        this['network'] = network;
        return this;
    }
    public withJobFlavors(jobFlavors: Array<string>): PoolSpecModel {
        this['jobFlavors'] = jobFlavors;
        return this;
    }
    public withDriver(driver: PoolDriver): PoolSpecModel {
        this['driver'] = driver;
        return this;
    }
    public withControlMode(controlMode: number): PoolSpecModel {
        this['controlMode'] = controlMode;
        return this;
    }
}