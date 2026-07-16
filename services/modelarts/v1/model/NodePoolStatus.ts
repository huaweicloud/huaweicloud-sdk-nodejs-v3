import { NodePoolStatusResources } from './NodePoolStatusResources';


export class NodePoolStatus {
    public resources?: NodePoolStatusResources;
    public constructor() { 
    }
    public withResources(resources: NodePoolStatusResources): NodePoolStatus {
        this['resources'] = resources;
        return this;
    }
}