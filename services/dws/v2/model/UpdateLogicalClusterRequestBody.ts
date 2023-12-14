import { ClusterRing } from './ClusterRing';


export class UpdateLogicalClusterRequestBody {
    private 'cluster_rings'?: Array<ClusterRing>;
    public mode?: string;
    private 'waiting_for_killing'?: number;
    public constructor(clusterRings?: Array<ClusterRing>) { 
        this['cluster_rings'] = clusterRings;
    }
    public withClusterRings(clusterRings: Array<ClusterRing>): UpdateLogicalClusterRequestBody {
        this['cluster_rings'] = clusterRings;
        return this;
    }
    public set clusterRings(clusterRings: Array<ClusterRing>  | undefined) {
        this['cluster_rings'] = clusterRings;
    }
    public get clusterRings(): Array<ClusterRing> | undefined {
        return this['cluster_rings'];
    }
    public withMode(mode: string): UpdateLogicalClusterRequestBody {
        this['mode'] = mode;
        return this;
    }
    public withWaitingForKilling(waitingForKilling: number): UpdateLogicalClusterRequestBody {
        this['waiting_for_killing'] = waitingForKilling;
        return this;
    }
    public set waitingForKilling(waitingForKilling: number  | undefined) {
        this['waiting_for_killing'] = waitingForKilling;
    }
    public get waitingForKilling(): number | undefined {
        return this['waiting_for_killing'];
    }
}