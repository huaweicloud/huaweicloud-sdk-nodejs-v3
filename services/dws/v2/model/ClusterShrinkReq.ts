

export class ClusterShrinkReq {
    private 'shrink_number'?: number;
    public online?: boolean;
    public retry?: boolean;
    private 'need_agency'?: boolean;
    private 'parallel_jobs'?: number;
    public type?: string;
    private 'force_backup'?: boolean;
    public constructor() { 
    }
    public withShrinkNumber(shrinkNumber: number): ClusterShrinkReq {
        this['shrink_number'] = shrinkNumber;
        return this;
    }
    public set shrinkNumber(shrinkNumber: number  | undefined) {
        this['shrink_number'] = shrinkNumber;
    }
    public get shrinkNumber(): number | undefined {
        return this['shrink_number'];
    }
    public withOnline(online: boolean): ClusterShrinkReq {
        this['online'] = online;
        return this;
    }
    public withRetry(retry: boolean): ClusterShrinkReq {
        this['retry'] = retry;
        return this;
    }
    public withNeedAgency(needAgency: boolean): ClusterShrinkReq {
        this['need_agency'] = needAgency;
        return this;
    }
    public set needAgency(needAgency: boolean  | undefined) {
        this['need_agency'] = needAgency;
    }
    public get needAgency(): boolean | undefined {
        return this['need_agency'];
    }
    public withParallelJobs(parallelJobs: number): ClusterShrinkReq {
        this['parallel_jobs'] = parallelJobs;
        return this;
    }
    public set parallelJobs(parallelJobs: number  | undefined) {
        this['parallel_jobs'] = parallelJobs;
    }
    public get parallelJobs(): number | undefined {
        return this['parallel_jobs'];
    }
    public withType(type: string): ClusterShrinkReq {
        this['type'] = type;
        return this;
    }
    public withForceBackup(forceBackup: boolean): ClusterShrinkReq {
        this['force_backup'] = forceBackup;
        return this;
    }
    public set forceBackup(forceBackup: boolean  | undefined) {
        this['force_backup'] = forceBackup;
    }
    public get forceBackup(): boolean | undefined {
        return this['force_backup'];
    }
}