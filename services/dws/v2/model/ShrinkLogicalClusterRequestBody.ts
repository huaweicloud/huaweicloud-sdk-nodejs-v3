import { ClusterRingVo } from './ClusterRingVo';


export class ShrinkLogicalClusterRequestBody {
    private 'cluster_rings'?: Array<ClusterRingVo>;
    private 'parallel_jobs'?: number;
    public mode?: string;
    public constructor(clusterRings?: Array<ClusterRingVo>) { 
        this['cluster_rings'] = clusterRings;
    }
    public withClusterRings(clusterRings: Array<ClusterRingVo>): ShrinkLogicalClusterRequestBody {
        this['cluster_rings'] = clusterRings;
        return this;
    }
    public set clusterRings(clusterRings: Array<ClusterRingVo>  | undefined) {
        this['cluster_rings'] = clusterRings;
    }
    public get clusterRings(): Array<ClusterRingVo> | undefined {
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
}