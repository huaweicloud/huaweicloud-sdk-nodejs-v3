

export class Space {
    public obs?: number;
    public auditlog?: number;
    public snapshot?: number;
    private 'cbr_snapshot'?: number;
    private 'obs_free'?: number;
    private 'snapshot_free'?: number;
    public db?: number;
    public log?: number;
    public constructor() { 
    }
    public withObs(obs: number): Space {
        this['obs'] = obs;
        return this;
    }
    public withAuditlog(auditlog: number): Space {
        this['auditlog'] = auditlog;
        return this;
    }
    public withSnapshot(snapshot: number): Space {
        this['snapshot'] = snapshot;
        return this;
    }
    public withCbrSnapshot(cbrSnapshot: number): Space {
        this['cbr_snapshot'] = cbrSnapshot;
        return this;
    }
    public set cbrSnapshot(cbrSnapshot: number  | undefined) {
        this['cbr_snapshot'] = cbrSnapshot;
    }
    public get cbrSnapshot(): number | undefined {
        return this['cbr_snapshot'];
    }
    public withObsFree(obsFree: number): Space {
        this['obs_free'] = obsFree;
        return this;
    }
    public set obsFree(obsFree: number  | undefined) {
        this['obs_free'] = obsFree;
    }
    public get obsFree(): number | undefined {
        return this['obs_free'];
    }
    public withSnapshotFree(snapshotFree: number): Space {
        this['snapshot_free'] = snapshotFree;
        return this;
    }
    public set snapshotFree(snapshotFree: number  | undefined) {
        this['snapshot_free'] = snapshotFree;
    }
    public get snapshotFree(): number | undefined {
        return this['snapshot_free'];
    }
    public withDb(db: number): Space {
        this['db'] = db;
        return this;
    }
    public withLog(log: number): Space {
        this['log'] = log;
        return this;
    }
}