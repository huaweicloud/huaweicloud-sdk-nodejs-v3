

export class PutCopyStateReq {
    public copystate?: PutCopyStateReqCopystateEnum;
    public migrationcycle?: PutCopyStateReqMigrationcycleEnum;
    public constructor() { 
    }
    public withCopystate(copystate: PutCopyStateReqCopystateEnum): PutCopyStateReq {
        this['copystate'] = copystate;
        return this;
    }
    public withMigrationcycle(migrationcycle: PutCopyStateReqMigrationcycleEnum): PutCopyStateReq {
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
    DELETING = 'DELETING',
    ERROR = 'ERROR',
    CLONING = 'CLONING',
    CUTOVERING = 'CUTOVERING'
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
