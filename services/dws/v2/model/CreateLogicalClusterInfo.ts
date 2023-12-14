import { ClusterRing } from './ClusterRing';


export class CreateLogicalClusterInfo {
    private 'logical_cluster_name'?: string;
    private 'cluster_rings'?: Array<ClusterRing>;
    public constructor(logicalClusterName?: string, clusterRings?: Array<ClusterRing>) { 
        this['logical_cluster_name'] = logicalClusterName;
        this['cluster_rings'] = clusterRings;
    }
    public withLogicalClusterName(logicalClusterName: string): CreateLogicalClusterInfo {
        this['logical_cluster_name'] = logicalClusterName;
        return this;
    }
    public set logicalClusterName(logicalClusterName: string  | undefined) {
        this['logical_cluster_name'] = logicalClusterName;
    }
    public get logicalClusterName(): string | undefined {
        return this['logical_cluster_name'];
    }
    public withClusterRings(clusterRings: Array<ClusterRing>): CreateLogicalClusterInfo {
        this['cluster_rings'] = clusterRings;
        return this;
    }
    public set clusterRings(clusterRings: Array<ClusterRing>  | undefined) {
        this['cluster_rings'] = clusterRings;
    }
    public get clusterRings(): Array<ClusterRing> | undefined {
        return this['cluster_rings'];
    }
}