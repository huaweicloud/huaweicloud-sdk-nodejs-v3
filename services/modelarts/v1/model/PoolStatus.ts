import { PoolStatusClusters } from './PoolStatusClusters';
import { PoolStatusDriver } from './PoolStatusDriver';
import { PoolStatusResources } from './PoolStatusResources';
import { PoolStatusScope } from './PoolStatusScope';


export class PoolStatus {
    public phase?: string;
    public message?: string;
    public resources?: PoolStatusResources;
    public scope?: Array<PoolStatusScope>;
    public driver?: PoolStatusDriver;
    public parent?: string;
    public root?: string;
    public clusters?: PoolStatusClusters;
    public constructor(phase?: string) { 
        this['phase'] = phase;
    }
    public withPhase(phase: string): PoolStatus {
        this['phase'] = phase;
        return this;
    }
    public withMessage(message: string): PoolStatus {
        this['message'] = message;
        return this;
    }
    public withResources(resources: PoolStatusResources): PoolStatus {
        this['resources'] = resources;
        return this;
    }
    public withScope(scope: Array<PoolStatusScope>): PoolStatus {
        this['scope'] = scope;
        return this;
    }
    public withDriver(driver: PoolStatusDriver): PoolStatus {
        this['driver'] = driver;
        return this;
    }
    public withParent(parent: string): PoolStatus {
        this['parent'] = parent;
        return this;
    }
    public withRoot(root: string): PoolStatus {
        this['root'] = root;
        return this;
    }
    public withClusters(clusters: PoolStatusClusters): PoolStatus {
        this['clusters'] = clusters;
        return this;
    }
}