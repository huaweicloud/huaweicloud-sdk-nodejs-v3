import { NodeResource } from './NodeResource';


export class NodeStatus {
    public phase?: string;
    public az?: string;
    public privateIp?: string;
    public resources?: NodeResource;
    public availableResources?: NodeResource;
    public constructor(phase?: string, resources?: NodeResource, availableResources?: NodeResource) { 
        this['phase'] = phase;
        this['resources'] = resources;
        this['availableResources'] = availableResources;
    }
    public withPhase(phase: string): NodeStatus {
        this['phase'] = phase;
        return this;
    }
    public withAz(az: string): NodeStatus {
        this['az'] = az;
        return this;
    }
    public withPrivateIp(privateIp: string): NodeStatus {
        this['privateIp'] = privateIp;
        return this;
    }
    public withResources(resources: NodeResource): NodeStatus {
        this['resources'] = resources;
        return this;
    }
    public withAvailableResources(availableResources: NodeResource): NodeStatus {
        this['availableResources'] = availableResources;
        return this;
    }
}