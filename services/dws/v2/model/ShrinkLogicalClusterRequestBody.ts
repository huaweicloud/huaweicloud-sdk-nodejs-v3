import { ClusterRing } from './ClusterRing';


export class ShrinkLogicalClusterRequestBody {
    private 'cluster_rings'?: Array<ClusterRing>;
    private 'parallel_jobs'?: number;
    public mode?: string;
    private 'shrink_node_num'?: number;
    public constructor() { 
    }
    public withClusterRings(clusterRings: Array<ClusterRing>): ShrinkLogicalClusterRequestBody {
        this['cluster_rings'] = clusterRings;
        return this;
    }
    public set clusterRings(clusterRings: Array<ClusterRing>  | undefined) {
        this['cluster_rings'] = clusterRings;
    }
    public get clusterRings(): Array<ClusterRing> | undefined {
        return this['cluster_rings'];
    }
    public withParallelJobs(parallelJobs: number): ShrinkLogicalClusterRequestBody {
        this['parallel_jobs'] = parallelJobs;
        return this;
    }
    public set parallelJobs(parallelJobs: number  | undefined) {
        this['parallel_jobs'] = parallelJobs;
    }
    public get parallelJobs(): number | undefined {
        return this['parallel_jobs'];
    }
    public withMode(mode: string): ShrinkLogicalClusterRequestBody {
        this['mode'] = mode;
        return this;
    }
    public withShrinkNodeNum(shrinkNodeNum: number): ShrinkLogicalClusterRequestBody {
        this['shrink_node_num'] = shrinkNodeNum;
        return this;
    }
    public set shrinkNodeNum(shrinkNodeNum: number  | undefined) {
        this['shrink_node_num'] = shrinkNodeNum;
    }
    public get shrinkNodeNum(): number | undefined {
        return this['shrink_node_num'];
    }
}