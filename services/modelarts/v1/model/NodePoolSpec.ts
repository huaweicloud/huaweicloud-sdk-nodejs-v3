import { PoolResource } from './PoolResource';


export class NodePoolSpec {
    public resources?: PoolResource;
    public constructor(resources?: PoolResource) { 
        this['resources'] = resources;
    }
    public withResources(resources: PoolResource): NodePoolSpec {
        this['resources'] = resources;
        return this;
    }
}