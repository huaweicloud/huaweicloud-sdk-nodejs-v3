import { Placement } from './Placement';
import { TargetCluster } from './TargetCluster';


export class ResourceBindingSpec {
    public resource?: object;
    public propagateDeps?: boolean;
    public replicaRequirements?: object;
    public replicas?: number;
    public placement?: Placement;
    public clusters?: Array<TargetCluster>;
    public constructor() { 
    }
    public withResource(resource: object): ResourceBindingSpec {
        this['resource'] = resource;
        return this;
    }
    public withPropagateDeps(propagateDeps: boolean): ResourceBindingSpec {
        this['propagateDeps'] = propagateDeps;
        return this;
    }
    public withReplicaRequirements(replicaRequirements: object): ResourceBindingSpec {
        this['replicaRequirements'] = replicaRequirements;
        return this;
    }
    public withReplicas(replicas: number): ResourceBindingSpec {
        this['replicas'] = replicas;
        return this;
    }
    public withPlacement(placement: Placement): ResourceBindingSpec {
        this['placement'] = placement;
        return this;
    }
    public withClusters(clusters: Array<TargetCluster>): ResourceBindingSpec {
        this['clusters'] = clusters;
        return this;
    }
}