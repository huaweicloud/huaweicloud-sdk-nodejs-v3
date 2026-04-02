import { GcParameters } from './GcParameters';


export class JobParameters {
    private 'delete_untagged'?: boolean;
    public workers?: number;
    private 'dry_run'?: boolean;
    private 'purged_blobs'?: number;
    private 'purged_manifests'?: number;
    private 'freed_space'?: number;
    public constructor(workers?: number) { 
        this['workers'] = workers;
    }
    public withDeleteUntagged(deleteUntagged: boolean): JobParameters {
        this['delete_untagged'] = deleteUntagged;
        return this;
    }
    public set deleteUntagged(deleteUntagged: boolean  | undefined) {
        this['delete_untagged'] = deleteUntagged;
    }
    public get deleteUntagged(): boolean | undefined {
        return this['delete_untagged'];
    }
    public withWorkers(workers: number): JobParameters {
        this['workers'] = workers;
        return this;
    }
    public withDryRun(dryRun: boolean): JobParameters {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean  | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun(): boolean | undefined {
        return this['dry_run'];
    }
    public withPurgedBlobs(purgedBlobs: number): JobParameters {
        this['purged_blobs'] = purgedBlobs;
        return this;
    }
    public set purgedBlobs(purgedBlobs: number  | undefined) {
        this['purged_blobs'] = purgedBlobs;
    }
    public get purgedBlobs(): number | undefined {
        return this['purged_blobs'];
    }
    public withPurgedManifests(purgedManifests: number): JobParameters {
        this['purged_manifests'] = purgedManifests;
        return this;
    }
    public set purgedManifests(purgedManifests: number  | undefined) {
        this['purged_manifests'] = purgedManifests;
    }
    public get purgedManifests(): number | undefined {
        return this['purged_manifests'];
    }
    public withFreedSpace(freedSpace: number): JobParameters {
        this['freed_space'] = freedSpace;
        return this;
    }
    public set freedSpace(freedSpace: number  | undefined) {
        this['freed_space'] = freedSpace;
    }
    public get freedSpace(): number | undefined {
        return this['freed_space'];
    }
}