

export class GcParameters {
    private 'delete_untagged'?: boolean;
    public workers?: number;
    private 'dry_run'?: boolean;
    public constructor(workers?: number) { 
        this['workers'] = workers;
    }
    public withDeleteUntagged(deleteUntagged: boolean): GcParameters {
        this['delete_untagged'] = deleteUntagged;
        return this;
    }
    public set deleteUntagged(deleteUntagged: boolean  | undefined) {
        this['delete_untagged'] = deleteUntagged;
    }
    public get deleteUntagged(): boolean | undefined {
        return this['delete_untagged'];
    }
    public withWorkers(workers: number): GcParameters {
        this['workers'] = workers;
        return this;
    }
    public withDryRun(dryRun: boolean): GcParameters {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean  | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun(): boolean | undefined {
        return this['dry_run'];
    }
}