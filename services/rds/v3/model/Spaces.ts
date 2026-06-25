

export class Spaces {
    public obs?: number;
    public snapshot?: number;
    private 'obs_free'?: number;
    private 'snapshot_free'?: number;
    public constructor() { 
    }
    public withObs(obs: number): Spaces {
        this['obs'] = obs;
        return this;
    }
    public withSnapshot(snapshot: number): Spaces {
        this['snapshot'] = snapshot;
        return this;
    }
    public withObsFree(obsFree: number): Spaces {
        this['obs_free'] = obsFree;
        return this;
    }
    public set obsFree(obsFree: number  | undefined) {
        this['obs_free'] = obsFree;
    }
    public get obsFree(): number | undefined {
        return this['obs_free'];
    }
    public withSnapshotFree(snapshotFree: number): Spaces {
        this['snapshot_free'] = snapshotFree;
        return this;
    }
    public set snapshotFree(snapshotFree: number  | undefined) {
        this['snapshot_free'] = snapshotFree;
    }
    public get snapshotFree(): number | undefined {
        return this['snapshot_free'];
    }
}