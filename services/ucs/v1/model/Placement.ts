import { ClusterAffinity } from './ClusterAffinity';
import { Toleration } from './Toleration';


export class Placement {
    public clusterAffinity?: ClusterAffinity;
    public clusterTolerations?: Array<Toleration>;
    public replicaScheduling?: object;
    public constructor() { 
    }
    public withClusterAffinity(clusterAffinity: ClusterAffinity): Placement {
        this['clusterAffinity'] = clusterAffinity;
        return this;
    }
    public withClusterTolerations(clusterTolerations: Array<Toleration>): Placement {
        this['clusterTolerations'] = clusterTolerations;
        return this;
    }
    public withReplicaScheduling(replicaScheduling: object): Placement {
        this['replicaScheduling'] = replicaScheduling;
        return this;
    }
}