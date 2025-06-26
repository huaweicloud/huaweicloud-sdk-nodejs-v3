

export class PutCopyStateReq {
    public copystate?: PutCopyStateReqCopystateEnum | string;
    public migrationcycle?: PutCopyStateReqMigrationcycleEnum | string;
    public constructor() { 
    }
    public withCopystate(copystate: PutCopyStateReqCopystateEnum | string): PutCopyStateReq {
        this['copystate'] = copystate;
        return this;
    }
    public withMigrationcycle(migrationcycle: PutCopyStateReqMigrationcycleEnum | string): PutCopyStateReq {
        this['migrationcycle'] = migrationcycle;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PutCopyStateReqCopystateEnum {
    UNAVAILABLE = 'UNAVAILABLE',
    WAITING = 'WAITING',
    INIT = 'INIT',
    REPLICATE = 'REPLICATE',
    SYNCING = 'SYNCING',
    STOPPING = 'STOPPING',
    STOPPED = 'STOPPED',
    SKIPPING = 'SKIPPING',
    DELETING = 'DELETING',
    ERROR = 'ERROR',
    CLONING = 'CLONING',
    CUTOVERING = 'CUTOVERING',
    FINISHED = 'FINISHED',
    CLEARING = 'clearing',
    CLEARED = 'cleared',
    CLEARFAILED = 'clearfailed',
    PREMIGREADY = 'premigready',
    PREMIGING = 'premiging',
    PREMIGED = 'premiged',
    PREMIGFAILED = 'premigfailed'
}
/**
    * @export
    * @enum {string}
    */
export enum PutCopyStateReqMigrationcycleEnum {
    CUTOVERING = 'cutovering',
    CUTOVERED = 'cutovered',
    CHECKING = 'checking',
    SETTING = 'setting',
    REPLICATING = 'replicating',
    SYNCING = 'syncing'
}
