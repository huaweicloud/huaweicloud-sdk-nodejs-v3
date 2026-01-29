

export class PutCopyStateReq {
    public copystate?: PutCopyStateReqCopystateEnum | string;
    public migrationcycle?: PutCopyStateReqMigrationcycleEnum | string;
    public constructor(copystate?: string, migrationcycle?: string) { 
        this['copystate'] = copystate;
        this['migrationcycle'] = migrationcycle;
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
    UNAVAILABLE = 'unavailable',
    WAITING = 'waiting',
    INIT = 'init',
    REPLICATE = 'replicate',
    SYNCING = 'syncing',
    STOPPING = 'stopping',
    STOPPED = 'stopped',
    SKIPPING = 'skipping',
    DELETING = 'deleting',
    CLEARING = 'clearing',
    CLEARED = 'cleared',
    CLEARFAILED = 'clearfailed',
    PREMIGREADY = 'premigready',
    PREMIGING = 'premiging',
    PREMIGED = 'premiged',
    PREMIGFAILED = 'premigfailed',
    CLONING = 'cloning',
    CUTOVERING = 'cutovering',
    FINISHED = 'finished',
    ERROR = 'error'
}
/**
    * @export
    * @enum {string}
    */
export enum PutCopyStateReqMigrationcycleEnum {
    NO_READY = 'no_ready',
    READY_FOR_TEST = 'ready_for_test',
    TESTING = 'testing',
    TESTED = 'tested',
    CUTOVERING = 'cutovering',
    CUTOVERED = 'cutovered',
    CHECKING = 'checking',
    SETTING = 'setting',
    REPLICATING = 'replicating',
    SYNCING = 'syncing'
}
